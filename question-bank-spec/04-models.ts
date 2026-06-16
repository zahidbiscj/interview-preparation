// =============================================================================
// 04 — TypeScript Models for the Question Bank
// Drop this into: src/app/features/question-bank/models/question-bank.models.ts
// These interfaces match the JSON in 02-data-model.md exactly.
// =============================================================================

/**
 * Difficulty level. NOTE: the UI does NOT filter by level (the user dropped
 * Junior/Mid/Senior). The field may still exist in JSON — it's simply ignored.
 * Kept here only so older data parses without error.
 */
export type Level = 'junior' | 'mid' | 'senior';

/** What kind of question it is (drives the badge + the Type filter). */
export type QuestionType =
  | 'conceptual'
  | 'code'
  | 'comparison'
  | 'scenario'
  | 'design'
  | 'behavioral';

/** How often the question is asked in real interviews. `high` → 🔥 badge. */
export type Frequency = 'high' | 'medium' | 'low';

// -----------------------------------------------------------------------------
// topics.json — the lightweight index that drives the sidebar
// -----------------------------------------------------------------------------

export interface TopicsIndex {
  topics: TopicRef[];
}

export interface TopicRef {
  id: string;        // "csharp"
  name: string;      // "C#"
  icon: string;      // emoji or icon key, e.g. "🔷"
  file: string;      // "csharp.json" — loaded lazily on demand
  order: number;     // display order in the sidebar
}

// -----------------------------------------------------------------------------
// <topic>.json — one file per topic
// -----------------------------------------------------------------------------

export interface TopicFile {
  topicId: string;       // must match the TopicRef.id
  topicName: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  subtopicId: string;    // "fundamentals"
  subtopicName: string;  // "Fundamentals"
  order: number;
  questions: Question[];
}

export interface Question {
  id: string;            // stable & unique: "csharp-fund-001"
  q: string;             // the question text
  answer: Answer;        // required
  level?: Level;
  type?: QuestionType;
  freq?: Frequency;
  tags?: string[];
}

/**
 * Progressive answer. Only `oneLiner` is required.
 * Fill more fields for harder questions; the UI hides anything omitted,
 * so there are never empty sections.
 *
 * Markdown is supported in: oneLiner, keyPoints[], detail, analogy.
 */
export interface Answer {
  oneLiner: string;          // shown on first expand — the "memorize this" answer
  keyPoints?: string[];      // bullet list of must-mention points
  detail?: string;           // teach-from-basics explanation (markdown)
  code?: CodeSample;
  analogy?: string;
  followUps?: string[];      // questions the interviewer asks next
  redFlags?: string[];       // answers that get you rejected
  related?: string[];        // ids of related questions (for "see also")
}

export interface CodeSample {
  lang: string;              // "csharp" | "sql" | "typescript" | "text" ...
  snippet: string;
  note?: string;             // one-line caption under the code
}

// -----------------------------------------------------------------------------
// View models — shapes the components actually consume
// (built by the service after flattening/joining; not stored in JSON)
// -----------------------------------------------------------------------------

/** A question plus the context needed to render and filter it in a flat list. */
export interface QuestionView extends Question {
  topicId: string;
  topicName: string;
  subtopicId: string;
  subtopicName: string;
  bookmarked: boolean;       // resolved from localStorage, not from JSON
}

/** Sidebar tree node: a topic and (once loaded) its subtopics. */
export interface TopicNode extends TopicRef {
  loaded: boolean;
  subtopics: SubtopicNode[];
  questionCount: number;     // computed after the topic file loads
}

export interface SubtopicNode {
  subtopicId: string;
  subtopicName: string;
  questionCount: number;
}

// -----------------------------------------------------------------------------
// Filters held in the service as a signal
// -----------------------------------------------------------------------------

export interface QuestionFilter {
  search: string;            // matches q + tags (case-insensitive)
  type: QuestionType | 'all'; // e.g. show only "code" (predict-the-output) questions
  bookmarkedOnly: boolean;
}

export const EMPTY_FILTER: QuestionFilter = {
  search: '',
  type: 'all',
  bookmarkedOnly: false,
};

// -----------------------------------------------------------------------------
// Cheat sheets — one Markdown file per topic, loaded by convention.
// Path: assets/data/cheatsheets/<topicId>.md  (e.g. cheatsheets/csharp.md)
// Rendered with ngx-markdown in a collapsible panel at the top of the topic.
// Not part of the question JSON — fetched as raw text on demand.
// -----------------------------------------------------------------------------
