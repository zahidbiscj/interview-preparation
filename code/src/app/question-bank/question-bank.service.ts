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

/** Per-day practice tally, keyed by YYYY-MM-DD. */
export interface DailyStat {
  date: string;
  answered: number;
  got: number;
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

  private topicCache = new Map<string, TopicFile>();
  private cheatSheetCache = new Map<string, string>();

  readonly topics = this._topics.asReadonly();
  readonly loadingTopicId = this._loadingTopicId.asReadonly();
  readonly selected = this._selected.asReadonly();
  readonly filter = this._filter.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isDark = this._isDark.asReadonly();
  readonly daily = this._daily.asReadonly();

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
