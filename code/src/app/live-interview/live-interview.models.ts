import type { QuestionView } from '../question-bank/models/question-bank.models';

export interface GradeResult {
  covered: boolean[];        // parallel to question.answer.keyPoints
  score: number;             // 0..100
  spokenFeedback: string;    // natural sentence read aloud by TTS
  source: 'llm' | 'local';
  providerId: string | null; // 'openrouter' | null
}

export type LivePhase =
  | 'setup'
  | 'asking'      // TTS reading the question
  | 'listening'   // mic open or textarea active
  | 'evaluating'  // grading in flight
  | 'feedback'    // showing + speaking result
  | 'done';

export interface LiveSettings {
  openrouterKey: string;
  model: string;
  rate: number;            // TTS speed 0.8..1.5
  voiceURI: string | null; // null = browser default
}

export const DEFAULT_LIVE_SETTINGS: LiveSettings = {
  openrouterKey: '',
  model: 'xiaomi/mimo-v2-flash:free',
  rate: 1.0,
  voiceURI: null,
};

export interface LiveResult {
  question: QuestionView;
  grade: GradeResult;
}
