# 07 — QuestionListComponent

> The right-hand panel: breadcrumb + search/filter bar + the stack of question cards.
> Mostly a layout host — it wires the service's `visibleQuestions` to a list of `QuestionCardComponent`s.

**File:** `src/app/features/question-bank/components/question-list/question-list.component.ts`
**Selector:** `qb-question-list` · standalone · `OnPush`
**Imports:** `SearchFilterComponent` (09), `QuestionCardComponent` (08)

---

## Data in

```ts
private svc = inject(QuestionBankService);

selected = this.svc.selected;
loading  = computed(() => this.svc.loadingTopicId() !== null);
error    = this.svc.error;
questions = this.svc.visibleQuestions;       // already filtered

// breadcrumb labels resolved from the selected node
breadcrumb = computed(() => { /* "C# › Fundamentals" from selected() + topics() */ });
```

---

## Template structure

```
@if (!selected()) {
  <empty-hint>Pick a topic on the left to start.</empty-hint>
} @else {
  <header>
    <span class="breadcrumb">{{ breadcrumb() }}</span>
    <span class="count">{{ questions().length }} questions</span>
  </header>

  <qb-search-filter/>                         <!-- file 09, talks to the service directly -->

  @if (loading()) {
    <skeleton-rows count="3"/>
  } @else if (error()) {
    <error-row [msg]="error()!" (retry)="...">
  } @else if (questions().length === 0) {
    <empty-hint>No questions match. <button (click)="svc.clearFilter()">Clear filters</button></empty-hint>
  } @else {
    @for (q of questions(); track q.id) {
      <qb-question-card [question]="q"/>
    }
  }
}
```

---

## Notes
- Keep this component **thin**. It does not implement expand/collapse or bookmarking — the card (08) does.
- `track q.id` is required for smooth expand/collapse animations across filter changes.
- If you later want **search across all topics**, this is the only place that changes (read a
  `visibleAcrossTopics` signal instead of `visibleQuestions`). Start scoped to the selected topic.

## Acceptance criteria
- [ ] Shows a prompt when nothing is selected.
- [ ] Renders skeleton while the topic file loads.
- [ ] Renders one `qb-question-card` per visible question, in JSON order.
- [ ] "No match" and "error/retry" states work.
