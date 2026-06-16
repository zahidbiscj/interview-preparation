# 05 — QuestionBankService

> The single source of truth for the feature. Loads JSON, caches it, holds the filter, exposes
> signals the components read. **Build this second** (right after `04-models.ts`), before any component.

**File:** `src/app/features/question-bank/services/question-bank.service.ts`
**Stack:** Angular 17+ standalone, `inject(HttpClient)`, signals. `providedIn: 'root'`.

---

## Responsibilities

1. Load `topics.json` once → expose the topic list for the sidebar.
2. **Lazy-load** each `<topic>.json` the first time its topic is expanded; cache it forever after.
3. Build flat `QuestionView[]` for the selected subtopic (joins in topic/subtopic names + bookmark state).
4. Hold the `QuestionFilter` signal and expose a **filtered, computed** list.
5. Manage bookmarks in `localStorage`.

It does **no rendering** and knows nothing about the DOM.

---

## Public API

```ts
// --- state (signals) ---
readonly topics    : Signal<TopicNode[]>;        // for the sidebar
readonly selected  : Signal<{ topicId: string; subtopicId: string } | null>;
readonly filter    : WritableSignal<QuestionFilter>;

/** Questions of the selected subtopic, after applying `filter`. computed(). */
readonly visibleQuestions : Signal<QuestionView[]>;

readonly loadingTopicId : Signal<string | null>; // for the skeleton state
readonly error          : Signal<string | null>;

// --- actions ---
init(): void;                                   // loads topics.json
toggleTopic(topicId: string): Promise<void>;    // lazy-loads the file on first expand
select(topicId: string, subtopicId: string): void;
setFilter(patch: Partial<QuestionFilter>): void;
clearFilter(): void;

isBookmarked(id: string): boolean;
toggleBookmark(id: string): void;
```

---

## Loading & caching

```ts
private cache = new Map<string, TopicFile>();    // topicId -> parsed file
private readonly DATA = 'assets/data';

private async loadTopic(ref: TopicRef): Promise<TopicFile> {
  if (this.cache.has(ref.id)) return this.cache.get(ref.id)!;
  this.loadingTopicId.set(ref.id);
  try {
    const file = await firstValueFrom(
      this.http.get<TopicFile>(`${this.DATA}/questions/${ref.file}`)
    );
    this.cache.set(ref.id, file);
    // patch the matching TopicNode: loaded=true, subtopics+counts from `file`
    return file;
  } catch {
    this.error.set(`Couldn't load ${ref.name} questions.`);
    throw new Error(ref.id);
  } finally {
    this.loadingTopicId.set(null);
  }
}
```

- `init()` GETs `assets/data/topics.json`, maps each `TopicRef` → `TopicNode` (`loaded:false`, empty subtopics, `questionCount:0`).
- `toggleTopic()` flips expanded state; if expanding and not loaded, calls `loadTopic()` then fills the node's `subtopics` + counts.
- `select()` sets `selected`. `visibleQuestions` recomputes off `selected` + `filter`.

---

## `visibleQuestions` (computed)

```ts
readonly visibleQuestions = computed<QuestionView[]>(() => {
  const sel = this.selected();
  if (!sel) return [];
  const file = this.cache.get(sel.topicId);
  const sub  = file?.subtopics.find(s => s.subtopicId === sel.subtopicId);
  if (!sub) return [];

  const f = this.filter();
  const term = f.search.trim().toLowerCase();

  return sub.questions
    .map(q => this.toView(q, file!, sub))
    .filter(v =>
      (f.level === 'all' || v.level === f.level) &&
      (f.type  === 'all' || v.type  === f.type)  &&
      (!f.bookmarkedOnly || v.bookmarked)        &&
      (!term ||
        v.q.toLowerCase().includes(term) ||
        (v.tags ?? []).some(t => t.toLowerCase().includes(term)))
    );
});
```

`toView()` spreads the `Question`, adds `topicId/topicName/subtopicId/subtopicName`, and resolves
`bookmarked` from the bookmark set.

---

## Bookmarks (localStorage)

```ts
private readonly KEY = 'qbank.bookmarks';
private bookmarks = signal<Set<string>>(this.readBookmarks());

isBookmarked = (id: string) => this.bookmarks().has(id);

toggleBookmark(id: string) {
  const next = new Set(this.bookmarks());
  next.has(id) ? next.delete(id) : next.add(id);
  this.bookmarks.set(next);
  localStorage.setItem(this.KEY, JSON.stringify([...next]));
}

private readBookmarks(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(this.KEY) ?? '[]')); }
  catch { return new Set(); }
}
```

> Because `bookmarks` is a signal, `visibleQuestions` recomputes automatically when a bookmark
> toggles — the ⭐ and the "Bookmarked only" filter both update with no extra wiring.

---

## Acceptance criteria
- [ ] App calls `init()` once (route activation) and the sidebar renders topics without loading any topic file.
- [ ] Expanding a topic loads its file **once**; collapsing/re-expanding does **not** re-fetch.
- [ ] Selecting a subtopic shows its questions; changing any filter updates the list reactively.
- [ ] Bookmarks survive a page refresh.
- [ ] A failed topic fetch sets `error` and the UI can show a retry.
