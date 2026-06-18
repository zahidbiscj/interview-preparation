import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VoiceService {
  readonly sttSupported =
    typeof window !== 'undefined' &&
    !!((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition);

  private recognition: any = null;
  private manualStop = false;

  getVoices(): SpeechSynthesisVoice[] {
    return typeof speechSynthesis !== 'undefined' ? speechSynthesis.getVoices() : [];
  }

  speak(text: string, rate = 1.0, voiceURI: string | null = null): Promise<void> {
    return new Promise(resolve => {
      if (typeof speechSynthesis === 'undefined') { resolve(); return; }
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = Math.min(2, Math.max(0.1, rate));
      if (voiceURI) {
        const match = speechSynthesis.getVoices().find(v => v.voiceURI === voiceURI);
        if (match) utter.voice = match;
      }
      utter.onend = () => resolve();
      utter.onerror = () => resolve();
      speechSynthesis.speak(utter);
    });
  }

  async speakSequence(lines: string[], rate = 1.0, voiceURI: string | null = null): Promise<void> {
    for (const line of lines.filter(l => l?.trim())) {
      await this.speak(line, rate, voiceURI);
    }
  }

  cancelSpeech(): void {
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  }

  /**
   * Opens the mic and resolves with the final accumulated transcript when:
   *  - stopListening() is called (Done Speaking tap), OR
   *  - a fatal error occurs.
   * Auto-restarts on silence so the mic stays open indefinitely.
   * Interim text is included in the resolve so clicking Done never returns empty
   * when the browser hasn't yet finalized the last utterance.
   */
  listen(
    onText: (t: string) => void,
    onError?: (msg: string) => void,
  ): Promise<string> {
    return new Promise(resolve => {
      if (!this.sttSupported) { resolve(''); return; }

      const SpeechRec = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
      this.manualStop = false;

      let finalText = '';
      let interimText = '';  // tracks the latest unfinished utterance across all rec instances
      let errorShown = false;

      const start = () => {
        const rec = new SpeechRec();
        this.recognition = rec;
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = 'en-US';

        rec.onresult = (event: any) => {
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const part = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalText += part + ' ';
              interim = '';
            } else {
              interim = part;
            }
          }
          interimText = interim;
          onText(finalText + interim);
        };

        rec.onend = () => {
          this.recognition = null;
          if (this.manualStop) {
            // Combine finalized + any pending interim so Done Speaking never loses words
            resolve((finalText + interimText).trim());
          } else {
            // Browser stopped on its own (silence timeout) — keep mic open
            try { start(); } catch { resolve((finalText + interimText).trim()); }
          }
        };

        rec.onerror = (e: any) => {
          this.recognition = null;
          if (e.error === 'not-allowed') {
            if (!errorShown) {
              errorShown = true;
              onError?.('Microphone access was denied. Allow mic in browser settings, or type your answer below.');
            }
            resolve((finalText + interimText).trim());
          } else if (e.error === 'network') {
            if (!errorShown) {
              errorShown = true;
              onError?.('Speech recognition needs an internet connection. Type your answer below.');
            }
            resolve((finalText + interimText).trim());
          } else if (e.error === 'aborted') {
            // fired when we call .stop() — onend handles the resolve
          } else if (e.error === 'no-speech') {
            // common on mobile; onend will fire and auto-restart
          } else {
            if (!errorShown) {
              errorShown = true;
              onError?.(`Mic error (${e.error}). Type your answer below.`);
            }
            resolve((finalText + interimText).trim());
          }
        };

        rec.start();
      };

      start();
    });
  }

  stopListening(): void {
    this.manualStop = true;
    this.recognition?.stop();
  }
}
