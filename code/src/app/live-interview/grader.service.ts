import { Injectable, inject } from '@angular/core';
import { QuestionView } from '../question-bank/models/question-bank.models';
import { GradeResult } from './live-interview.models';
import { LiveSettingsService } from './live-settings.service';

const SYSTEM_PROMPT = `You are a senior technical interviewer grading a candidate's SPOKEN answer that was transcribed by speech-to-text. Ignore filler words, minor grammar errors, and transcription typos. Judge MEANING, not exact wording. Be fair but rigorous.

Return ONLY a JSON object with EXACTLY this shape — no markdown, no extra keys:
{
  "covered": boolean[],
  "score": number,
  "spokenFeedback": string
}
"covered" array length MUST equal the number of key points given.
"score" is 0-100 overall.
"spokenFeedback" is 1-2 short sentences spoken directly to the candidate, mentioning what they missed and one actionable tip.`;

const STOP_WORDS = new Set([
  'the','a','an','is','are','in','of','to','with','if','you','must','show','and',
  'or','for','on','that','this','it','as','be','use','can','by','from','when',
  'we','your','their','its','all','any','was','has','had','have','will','not',
]);

@Injectable({ providedIn: 'root' })
export class GraderService {
  private liveSettings = inject(LiveSettingsService);

  async grade(q: QuestionView, transcript: string): Promise<GradeResult> {
    const { openrouterKey, model } = this.liveSettings.settings();
    if (openrouterKey?.trim() && q.answer.keyPoints?.length) {
      const result = await this.callOpenRouter(q, transcript, openrouterKey.trim(), model);
      if (result) return result;
    }
    return this.gradeLocal(q, transcript);
  }

  private async callOpenRouter(
    q: QuestionView, transcript: string, apiKey: string, model: string
  ): Promise<GradeResult | null> {
    const kps = q.answer.keyPoints!;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://zahidbiscj.github.io/interview-preparation/',
          'X-Title': 'crackInterview Live',
        },
        body: JSON.stringify({
          model,
          response_format: { type: 'json_object' },
          temperature: 0.2,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user',   content: this.buildUserPrompt(q, transcript, kps) },
          ],
        }),
      });
      clearTimeout(timeout);
      if (!res.ok) return null;
      const data = await res.json();
      const raw = JSON.parse(data.choices[0].message.content);
      return this.coerceResponse(raw, kps, 'openrouter');
    } catch {
      clearTimeout(timeout);
      return null;
    }
  }

  private buildUserPrompt(q: QuestionView, transcript: string, kps: string[]): string {
    const points = kps.map((k, i) => `${i + 1}. ${k}`).join('\n');
    return `Question:\n${q.q}\n\nExpected key points (judge each independently, in order):\n${points}\n\nModel answer (reference only):\n${q.answer.oneLiner}\n\nCandidate's transcribed spoken answer:\n"${transcript || '(no answer given)'}"`;
  }

  private coerceResponse(raw: any, kps: string[], providerId: string): GradeResult {
    let covered: boolean[] = Array.isArray(raw?.covered) ? raw.covered.map(Boolean) : [];
    while (covered.length < kps.length) covered.push(false);
    covered = covered.slice(0, kps.length);

    const score = Math.min(100, Math.max(0, Number(raw?.score) || 0));
    const n = covered.filter(Boolean).length;
    const spokenFeedback =
      typeof raw?.spokenFeedback === 'string' && raw.spokenFeedback.trim()
        ? raw.spokenFeedback
        : n === kps.length
          ? `Great, you covered all ${kps.length} key points.`
          : `You covered ${n} of ${kps.length} key points.`;

    return { covered, score, spokenFeedback, source: 'llm', providerId };
  }

  gradeLocal(q: QuestionView, transcript: string): GradeResult {
    const kps = q.answer.keyPoints ?? [];
    if (!kps.length) {
      return { covered: [], score: 100, spokenFeedback: 'No key points defined for this question.', source: 'local', providerId: null };
    }

    const text = transcript.toLowerCase();
    const covered = kps.map(kp => {
      const toks = kp.toLowerCase().split(/\W+/).filter(t => t.length > 2 && !STOP_WORDS.has(t));
      if (!toks.length) return true;
      return toks.filter(t => text.includes(t)).length / toks.length >= 0.5;
    });

    const n = covered.filter(Boolean).length;
    const missed = kps.filter((_, i) => !covered[i]);
    const spokenFeedback = missed.length
      ? `You covered ${n} of ${kps.length} key points. Don't forget: ${missed.slice(0, 2).join('; ')}.`
      : `Excellent! You covered all ${kps.length} key points.`;

    return {
      covered,
      score: Math.round((n / kps.length) * 100),
      spokenFeedback,
      source: 'local',
      providerId: null,
    };
  }
}
