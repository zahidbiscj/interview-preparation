import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
  TopicsIndex, TopicRef, TopicFile, TopicNode, SubtopicNode,
  QuestionView, QuestionFilter, EMPTY_FILTER
} from './models/question-bank.models';

const BOOKMARK_KEY = 'qbank.bookmarks';
const THEME_KEY = 'qbank.theme';

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

  private topicCache = new Map<string, TopicFile>();
  private cheatSheetCache = new Map<string, string>();

  readonly topics = this._topics.asReadonly();
  readonly loadingTopicId = this._loadingTopicId.asReadonly();
  readonly selected = this._selected.asReadonly();
  readonly filter = this._filter.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isDark = this._isDark.asReadonly();

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
