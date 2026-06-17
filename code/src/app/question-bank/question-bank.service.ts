import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  TopicsIndex, TopicRef, TopicFile, TopicNode, SubtopicNode,
  QuestionView, QuestionFilter, EMPTY_FILTER
} from './models/question-bank.models';

const BOOKMARK_KEY = 'qbank.bookmarks';
const THEME_KEY = 'qbank.theme';
const DAILY_KEY = 'qbank.daily';
const SETS_KEY = 'qbank.sets';

/** Per-day practice tally, keyed by YYYY-MM-DD. */
export interface DailyStat {
  date: string;
  answered: number;
  got: number;
}

/** A user-curated collection of questions (by id), e.g. "Interview question set 1". */
export interface QuestionSet {
  id: string;
  name: string;
  questionIds: string[];
  createdAt: number;
}

@Injectable({ providedIn: 'root' })
export class QuestionBankService {
  private http = inject(HttpClient);

  private _topics = signal<TopicNode[]>([]);
  private _loadingTopicId = signal<string | null>(null);
  private _selected = signal<{ topicId: string; subtopicId: string } | null>(null);
  private _filter = signal<QuestionFilter>({ ...EMPTY_FILTER });
  private _bookmarks = signal<Set<string>>(this.loadBookmarks());
  private _error = signal<string | null>(null);
  private _isDark = signal<boolean>(this.loadTheme());
  private _daily = signal<Record<string, DailyStat>>(this.loadDaily());
  private _focusQuestionId = signal<string | null>(null);
  private _sets = signal<QuestionSet[]>(this.loadSets());

  private topicCache = new Map<string, TopicFile>();
  private cheatSheetCache = new Map<string, string>();

  readonly topics = this._topics.asReadonly();
  readonly loadingTopicId = this._loadingTopicId.asReadonly();
  readonly selected = this._selected.asReadonly();
  readonly filter = this._filter.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isDark = this._isDark.asReadonly();
  readonly daily = this._daily.asReadonly();
  /** When set, the matching question card should scroll into view and expand. */
  readonly focusQuestionId = this._focusQuestionId.asReadonly();
  /** User-curated question sets, newest first. */
  readonly sets = this._sets.asReadonly();

  /** Total questions self-graded across all days. */
  readonly totalAnswered = computed(() =>
    Object.values(this._daily()).reduce((s, d) => s + d.answered, 0));

  /** Consecutive-day practice streak ending today (or yesterday). */
  readonly streak = computed(() => {
    const map = this._daily();
    let count = 0;
    const day = new Date();
    // allow the streak to count even if today isn't done yet (start from today)
    for (let i = 0; i < 366; i++) {
      const key = this.dateKey(day);
      if (map[key] && map[key].answered > 0) {
        count++;
      } else if (i > 0) {
        break; // a gap (other than today) ends the streak
      } else {
        // today not practiced yet — keep checking from yesterday
      }
      day.setDate(day.getDate() - 1);
    }
    return count;
  });

  readonly visibleQuestions = computed<QuestionView[]>(() => {
    const sel = this._selected();
    if (!sel) return [];

    const topicNode = this._topics().find(t => t.id === sel.topicId);
    if (!topicNode) return [];

    const topicFile = this.topicCache.get(sel.topicId);
    if (!topicFile) return [];

    const subtopic = topicFile.subtopics.find(s => s.subtopicId === sel.subtopicId);
    if (!subtopic) return [];

    const f = this._filter();
    const bookmarks = this._bookmarks();
    const search = f.search.toLowerCase().trim();

    return subtopic.questions
      .filter(q => {
        if (f.bookmarkedOnly && !bookmarks.has(q.id)) return false;
        if (f.type !== 'all' && q.type !== f.type) return false;
        if (search) {
          const inQ = q.q.toLowerCase().includes(search);
          const inTags = q.tags?.some(t => t.toLowerCase().includes(search)) ?? false;
          if (!inQ && !inTags) return false;
        }
        return true;
      })
      .map(q => ({
        ...q,
        topicId: topicNode.id,
        topicName: topicNode.name,
        subtopicId: subtopic.subtopicId,
        subtopicName: subtopic.subtopicName,
        bookmarked: bookmarks.has(q.id),
      }));
  });

  async init(): Promise<void> {
    try {
      const index = await firstValueFrom(
        this.http.get<TopicsIndex>('assets/data/topics.json')
      );
      this._topics.set(
        [...index.topics]
          .sort((a, b) => a.order - b.order)
          .map((ref: TopicRef): TopicNode => ({
            ...ref,
            loaded: false,
            expanded: false,
            subtopics: [],
            questionCount: 0,
          }))
      );
    } catch {
      this._error.set('Failed to load topics index.');
    }
  }

  async toggleTopic(id: string): Promise<void> {
    const topics = this._topics();
    const topic = topics.find(t => t.id === id);
    if (!topic) return;

    if (!topic.loaded) {
      this._loadingTopicId.set(id);
      try {
        const file = await firstValueFrom(
          this.http.get<TopicFile>(`assets/data/questions/${topic.file}`)
        );
        this.topicCache.set(id, file);

        this._topics.update(list =>
          list.map(t => {
            if (t.id !== id) return t;
            const subtopics: SubtopicNode[] = file.subtopics.map(s => ({
              subtopicId: s.subtopicId,
              subtopicName: s.subtopicName,
              questionCount: s.questions.length,
            }));
            return {
              ...t,
              loaded: true,
              expanded: true,
              subtopics,
              questionCount: file.subtopics.reduce((sum, s) => sum + s.questions.length, 0),
            };
          })
        );
      } catch {
        this._error.set(`Failed to load questions for "${topic.name}".`);
      } finally {
        this._loadingTopicId.set(null);
      }
    } else {
      this._topics.update(list =>
        list.map(t => (t.id === id ? { ...t, expanded: !t.expanded } : t))
      );
    }
  }

  select(topicId: string, subtopicId: string): void {
    this._selected.set({ topicId, subtopicId });
    this._filter.set({ ...EMPTY_FILTER });
  }

  /**
   * Jump to a specific question by id (used by clickable follow-ups):
   * loads its topic, expands the node, selects its subtopic, and flags it to
   * scroll into view + auto-expand.
   */
  async goToQuestion(id: string): Promise<boolean> {
    const topic = this._topics().find(t => id.startsWith(t.id + '-'));
    if (!topic) return false;

    const file = await this.ensureTopicLoaded(topic.id);
    if (!file) return false;

    // make sure the sidebar node is marked loaded + expanded
    this._topics.update(list =>
      list.map(t => {
        if (t.id !== topic.id) return t;
        if (t.loaded) return { ...t, expanded: true };
        const subtopics: SubtopicNode[] = file.subtopics.map(s => ({
          subtopicId: s.subtopicId,
          subtopicName: s.subtopicName,
          questionCount: s.questions.length,
        }));
        return {
          ...t, loaded: true, expanded: true, subtopics,
          questionCount: file.subtopics.reduce((sum, s) => sum + s.questions.length, 0),
        };
      })
    );

    const sub = file.subtopics.find(s => s.questions.some(q => q.id === id));
    if (!sub) return false;

    this._selected.set({ topicId: topic.id, subtopicId: sub.subtopicId });
    this._filter.set({ ...EMPTY_FILTER });
    this._focusQuestionId.set(id);
    return true;
  }

  clearFocus(): void {
    this._focusQuestionId.set(null);
  }

  setFilter(patch: Partial<QuestionFilter>): void {
    this._filter.update(f => ({ ...f, ...patch }));
  }

  clearFilter(): void {
    this._filter.set({ ...EMPTY_FILTER });
  }

  isBookmarked(id: string): boolean {
    return this._bookmarks().has(id);
  }

  toggleBookmark(id: string): void {
    this._bookmarks.update(set => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify([...next]));
      return next;
    });
  }

  async loadCheatSheet(topicId: string): Promise<string> {
    if (this.cheatSheetCache.has(topicId)) {
      return this.cheatSheetCache.get(topicId)!;
    }
    try {
      const text = await firstValueFrom(
        this.http.get(`assets/data/cheatsheets/${topicId}.md`, { responseType: 'text' })
      );
      this.cheatSheetCache.set(topicId, text);
      return text;
    } catch {
      return '> Cheat sheet not available for this topic.';
    }
  }

  /** Ensure a topic's questions are loaded into the cache (no UI side-effects). */
  async ensureTopicLoaded(id: string): Promise<TopicFile | null> {
    if (this.topicCache.has(id)) return this.topicCache.get(id)!;
    const topic = this._topics().find(t => t.id === id);
    if (!topic) return null;
    try {
      const file = await firstValueFrom(
        this.http.get<TopicFile>(`assets/data/questions/${topic.file}`)
      );
      this.topicCache.set(id, file);
      return file;
    } catch {
      this._error.set(`Failed to load questions for "${topic.name}".`);
      return null;
    }
  }

  /**
   * Build a flat pool of QuestionViews for the mock-exam simulator.
   * @param topicIds which topics to draw from (empty = all topics)
   * @param levels which difficulty levels to include (empty = all)
   */
  async buildPool(topicIds: string[], levels: string[]): Promise<QuestionView[]> {
    const ids = topicIds.length ? topicIds : this._topics().map(t => t.id);
    const bookmarks = this._bookmarks();
    const pool: QuestionView[] = [];

    for (const id of ids) {
      const file = await this.ensureTopicLoaded(id);
      if (!file) continue;
      const topicNode = this._topics().find(t => t.id === id);
      for (const sub of file.subtopics) {
        for (const q of sub.questions) {
          if (levels.length && !levels.includes(q.level ?? 'mid')) continue;
          pool.push({
            ...q,
            topicId: file.topicId,
            topicName: topicNode?.name ?? file.topicName,
            subtopicId: sub.subtopicId,
            subtopicName: sub.subtopicName,
            bookmarked: bookmarks.has(q.id),
          });
        }
      }
    }
    return pool;
  }

  /**
   * Build a pool from an explicit, ordered list of question ids (used by custom
   * sets). Loads whichever topics the ids belong to and returns the matching
   * QuestionViews in the same order as `ids` (unknown ids are skipped).
   */
  async buildPoolFromIds(ids: string[]): Promise<QuestionView[]> {
    const bookmarks = this._bookmarks();
    const topicIds = new Set<string>();
    for (const id of ids) {
      const topic = this._topics().find(t => id.startsWith(t.id + '-'));
      if (topic) topicIds.add(topic.id);
    }

    const lookup = new Map<string, QuestionView>();
    for (const topicId of topicIds) {
      const file = await this.ensureTopicLoaded(topicId);
      if (!file) continue;
      const topicNode = this._topics().find(t => t.id === topicId);
      for (const sub of file.subtopics) {
        for (const q of sub.questions) {
          lookup.set(q.id, {
            ...q,
            topicId: file.topicId,
            topicName: topicNode?.name ?? file.topicName,
            subtopicId: sub.subtopicId,
            subtopicName: sub.subtopicName,
            bookmarked: bookmarks.has(q.id),
          });
        }
      }
    }

    return ids
      .map(id => lookup.get(id))
      .filter((q): q is QuestionView => !!q);
  }

  // ── Custom sets ──

  /** Create a new set and return its id. */
  createSet(name: string): string {
    const id = `set-${Date.now()}-${this._sets().length}`;
    const set: QuestionSet = {
      id,
      name: name.trim() || 'Untitled set',
      questionIds: [],
      createdAt: Date.now(),
    };
    this._sets.update(list => this.persistSets([set, ...list]));
    return id;
  }

  renameSet(id: string, name: string): void {
    const clean = name.trim();
    if (!clean) return;
    this._sets.update(list =>
      this.persistSets(list.map(s => (s.id === id ? { ...s, name: clean } : s))));
  }

  deleteSet(id: string): void {
    this._sets.update(list => this.persistSets(list.filter(s => s.id !== id)));
  }

  /** Add or remove a question id from a set (no-op duplicates). */
  toggleInSet(setId: string, questionId: string): void {
    this._sets.update(list =>
      this.persistSets(list.map(s => {
        if (s.id !== setId) return s;
        const has = s.questionIds.includes(questionId);
        return {
          ...s,
          questionIds: has
            ? s.questionIds.filter(q => q !== questionId)
            : [...s.questionIds, questionId],
        };
      })));
  }

  private persistSets(list: QuestionSet[]): QuestionSet[] {
    localStorage.setItem(SETS_KEY, JSON.stringify(list));
    return list;
  }

  private loadSets(): QuestionSet[] {
    try {
      const raw = localStorage.getItem(SETS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  /** Record a finished practice batch into today's tally. */
  recordPractice(answered: number, got: number): void {
    if (answered <= 0) return;
    const key = this.dateKey(new Date());
    this._daily.update(map => {
      const prev = map[key] ?? { date: key, answered: 0, got: 0 };
      const next = { ...map, [key]: { date: key, answered: prev.answered + answered, got: prev.got + got } };
      localStorage.setItem(DAILY_KEY, JSON.stringify(next));
      return next;
    });
  }

  /** Last `days` days (oldest→newest) as DailyStat rows, zero-filled. */
  lastDays(days: number): DailyStat[] {
    const map = this._daily();
    const out: DailyStat[] = [];
    const day = new Date();
    day.setDate(day.getDate() - (days - 1));
    for (let i = 0; i < days; i++) {
      const key = this.dateKey(day);
      out.push(map[key] ?? { date: key, answered: 0, got: 0 });
      day.setDate(day.getDate() + 1);
    }
    return out;
  }

  private dateKey(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private loadDaily(): Record<string, DailyStat> {
    try {
      const raw = localStorage.getItem(DAILY_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  toggleTheme(): void {
    const next = !this._isDark();
    this._isDark.set(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
  }

  applyStoredTheme(): void {
    const theme = this._isDark() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  private loadBookmarks(): Set<string> {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  }

  private loadTheme(): boolean {
    const stored = localStorage.getItem(THEME_KEY);
    return stored ? stored === 'dark' : true;
  }
}
