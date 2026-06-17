import { Injectable, signal, computed } from '@angular/core';

const REVIEW_LOG_KEY = 'review_log';

/** One practiced question, written by every practice surface. */
export interface ReviewEntry {
  questionId: string;
  topicId: string;
  topicName: string;
  date: string;               // ISO timestamp
  result: 'got' | 'review' | number; // number = SM-2 rating 0..5
}

export interface TopicReviewStat {
  topicId: string;
  topicName: string;
  count: number;
  lastReviewed: string | null; // ISO
}

/**
 * Single source of truth for "what was practiced when".
 * Feeds the dashboard topic list, Topic Neglect, and Mastery Radar.
 */
@Injectable({ providedIn: 'root' })
export class ReviewLogService {
  private _entries = signal<ReviewEntry[]>(this.load());
  readonly entries = this._entries.asReadonly();

  readonly total = computed(() => this._entries().length);

  log(entry: Omit<ReviewEntry, 'date'> & { date?: string }): void {
    const full: ReviewEntry = { ...entry, date: entry.date ?? new Date().toISOString() };
    this._entries.update(list => {
      const next = [...list, full];
      this.persist(next);
      return next;
    });
  }

  /** Per-topic totals + last-reviewed, unsorted. */
  statsByTopic(): TopicReviewStat[] {
    const map = new Map<string, TopicReviewStat>();
    for (const e of this._entries()) {
      const cur = map.get(e.topicId) ?? { topicId: e.topicId, topicName: e.topicName, count: 0, lastReviewed: null };
      cur.count++;
      if (!cur.lastReviewed || e.date > cur.lastReviewed) cur.lastReviewed = e.date;
      map.set(e.topicId, cur);
    }
    return [...map.values()];
  }

  countByTopic(): Record<string, number> {
    const out: Record<string, number> = {};
    for (const e of this._entries()) out[e.topicId] = (out[e.topicId] ?? 0) + 1;
    return out;
  }

  lastReviewedByTopic(): Record<string, string> {
    const out: Record<string, string> = {};
    for (const e of this._entries()) {
      if (!out[e.topicId] || e.date > out[e.topicId]) out[e.topicId] = e.date;
    }
    return out;
  }

  /** Entries with date in [fromIso, toIso). */
  reviewsInRange(fromIso: string, toIso: string): ReviewEntry[] {
    return this._entries().filter(e => e.date >= fromIso && e.date < toIso);
  }

  private load(): ReviewEntry[] {
    try {
      const raw = localStorage.getItem(REVIEW_LOG_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private persist(list: ReviewEntry[]): void {
    try { localStorage.setItem(REVIEW_LOG_KEY, JSON.stringify(list)); } catch { /* quota */ }
  }
}
