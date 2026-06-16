# 06 — TopicSidebarComponent

> The left-hand **topic tree**. Topics expand to reveal subtopics. Clicking a subtopic selects it.

**File:** `src/app/features/question-bank/components/topic-sidebar/topic-sidebar.component.ts`
**Selector:** `qb-topic-sidebar` · standalone · `ChangeDetectionStrategy.OnPush`

---

## Data in / events out

It reads the service directly (simplest), or takes inputs if you prefer dumb components.
Recommended: **inject the service** since this feature is small.

```ts
private svc = inject(QuestionBankService);

topics    = this.svc.topics;          // Signal<TopicNode[]>
selected  = this.svc.selected;        // to highlight the active subtopic
loadingId = this.svc.loadingTopicId;  // to show a spinner on the expanding topic

onToggleTopic(id: string)  { this.svc.toggleTopic(id); }
onSelect(topicId: string, subtopicId: string) { this.svc.select(topicId, subtopicId); }
```

---

## Template structure

```
@for (t of topics(); track t.id) {
  <button class="topic-row" (click)="onToggleTopic(t.id)">
    <span class="caret">{{ t.expanded ? '▾' : '▸' }}</span>
    <span class="icon">{{ t.icon }}</span>
    <span class="name">{{ t.name }}</span>
    <span class="count">{{ t.loaded ? t.questionCount : '' }}</span>
    @if (loadingId() === t.id) { <spinner/> }
  </button>

  @if (t.expanded) {
    @for (s of t.subtopics; track s.subtopicId) {
      <button class="subtopic-row"
              [class.active]="isActive(t.id, s.subtopicId)"
              (click)="onSelect(t.id, s.subtopicId)">
        • {{ s.subtopicName }} <span class="count">({{ s.questionCount }})</span>
      </button>
    }
  }
}
```

> `t.expanded` lives on the `TopicNode` (toggled by the service). Subtopics render only after the
> file loads, so there's no flash of an empty expanded topic — show the spinner while `loadingId === t.id`.

`isActive(topicId, subId)` compares against `selected()`.

---

## Behavior
- First expand of a topic → service lazy-loads the file → subtopics + counts appear.
- Re-expanding is instant (cached).
- The active subtopic row is visually highlighted.
- On mobile this same component renders inside a drawer (see `03-ui-design.md`); the drawer
  open/close state can live in the parent page, not here.

## Acceptance criteria
- [ ] Topics list on load; none of the topic files are fetched yet.
- [ ] Expanding shows a spinner, then subtopics with counts.
- [ ] Clicking a subtopic highlights it and updates the question list.
- [ ] `OnPush` + signals: no manual change detection calls needed.
