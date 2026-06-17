export type Level = 'junior' | 'mid' | 'senior';

export type QuestionType =
  | 'conceptual'
  | 'code'
  | 'comparison'
  | 'scenario'
  | 'design'
  | 'behavioral';

export type Frequency = 'high' | 'medium' | 'low';

export interface TopicsIndex {
  topics: TopicRef[];
}

export interface TopicRef {
  id: string;
  name: string;
  icon: string;
  file: string;
  order: number;
}

export interface TopicFile {
  topicId: string;
  topicName: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  subtopicId: string;
  subtopicName: string;
  order: number;
  questions: Question[];
}

export interface Question {
  id: string;
  q: string;
  answer: Answer;
  level?: Level;
  type?: QuestionType;
  freq?: Frequency;
  tags?: string[];
}

export interface Answer {
  oneLiner: string;
  keyPoints?: string[];
  detail?: string;
  code?: CodeSample;
  analogy?: string;
  followUps?: string[];
  redFlags?: string[];
  related?: string[];
  dialogue?: DialogueTurn[];
  followUpsQA?: FollowUpQA[];
}

/** One turn of a mock interview dialogue. */
export interface DialogueTurn {
  role: 'interviewer' | 'me';
  text: string;
}

/** A follow-up question with its one-line answer; relatedId links to another question. */
export interface FollowUpQA {
  q: string;
  a: string;
  relatedId?: string;
}

export interface CodeSample {
  lang: string;
  snippet: string;
  note?: string;
}

export interface QuestionView extends Question {
  topicId: string;
  topicName: string;
  subtopicId: string;
  subtopicName: string;
  bookmarked: boolean;
}

export interface TopicNode extends TopicRef {
  loaded: boolean;
  subtopics: SubtopicNode[];
  questionCount: number;
  expanded: boolean;
}

export interface SubtopicNode {
  subtopicId: string;
  subtopicName: string;
  questionCount: number;
}

export interface QuestionFilter {
  search: string;
  type: QuestionType | 'all';
  bookmarkedOnly: boolean;
}

export const EMPTY_FILTER: QuestionFilter = {
  search: '',
  type: 'all',
  bookmarkedOnly: false,
};
