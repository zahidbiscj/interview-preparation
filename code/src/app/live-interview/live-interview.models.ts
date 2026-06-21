import type { QuestionView } from '../question-bank/models/question-bank.models';
import { environment } from '../../environments/environment';

export interface GradeResult {
  covered: boolean[];        // parallel to question.answer.keyPoints
  score: number;             // 0..100
  spokenFeedback: string;    // natural sentence read aloud by TTS
  source: 'llm' | 'local';
  providerId: string | null; // 'openrouter' | null
}

export type LivePhase =
  | 'listening'   // textarea active
  | 'evaluating'  // grading in flight
  | 'feedback'    // showing result
  | 'done';

export interface LiveSettings {
  openrouterKey: string;
  model: string;
}

export const DEFAULT_LIVE_SETTINGS: LiveSettings = {
  openrouterKey: environment.openrouterKey,
  model: environment.openrouterModel,
};

export interface LiveResult {
  question: QuestionView;
  grade: GradeResult;
  transcript: string;
}

export interface SavedSession {
  questions: QuestionView[];
  index: number;
  results: LiveResult[];
  transcript: string;
  grade: GradeResult | null;
  phase: 'listening' | 'feedback';
  startMs: number;
}
