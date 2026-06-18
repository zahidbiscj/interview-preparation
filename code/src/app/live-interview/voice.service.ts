import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VoiceService {
  readonly sttSupported =
    typeof window !== 'undefined' &&
    !!((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition);

  private recognition: any = null;
  private sessionId = 0;           // bumped on every new listen() call
  private activeResolve: ((text: string) => void) | null = null;
  private capturedText = '';       // latest accumulated text, readable by stopListening()
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
   * Opens the mic and resolves with the full transcript when stopListening() is called.
   * Calling listen() again while a previous session is active cleanly cancels the old one first.
   */
  listen(
    onText: (t: string) => void,
    onError?: (msg: string) => void,
  ): Promise<string> {
    // ── Tear down any previous session ──────────────────────────────────────
    this.sessionId++;               // all closures from previous calls now see a stale ID
    const myId = this.sessionId;

    if (this.recognition) {
      try { this.recognition.stop(); } catch { /* ignore */ }
      this.recognition = null;
    }
    // Resolve the previous promise (if any) so it doesn't leak
    if (this.activeResolve) {
      const prev = this.activeResolve;
      this.activeResolve = null;
      prev(this.capturedText);
    }

    this.manualStop = false;
    this.capturedText = '';

    // ── New session ──────────────────────────────────────────────────────────
    return new Promise<string>(resolve => {
      if (!this.sttSupported) { resolve(''); return; }

      this.activeResolve = resolve;

      const SpeechRec = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
      let finalText = '';
      let interimText = '';
      let errorShown = false;

      const done = (text: string) => {
        this.activeResolve = null;
        resolve(text);
      };

      const start = () => {
        if (this.sessionId !== myId) return; // superseded — do not restart

        const rec = new SpeechRec();
        this.recognition = rec;
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = 'en-US';

        rec.onresult = (event: any) => {
          if (this.sessionId !== myId) return;
          let interim = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const part = event.results[i][0].transcript;
            if (event.results[i].isFinal) { finalText += part + ' '; interim = ''; }
            else interim = part;
          }
          interimText = interim;
          this.capturedText = (finalText + interimText).trim();
          onText(finalText + interim);
        };

        rec.onend = () => {
          if (this.sessionId !== myId) { this.recognition = null; return; }
          this.recognition = null;
          this.capturedText = (finalText + interimText).trim();

          if (this.manualStop) {
            done(this.capturedText);
          } else {
            // Auto-restart — browser killed recognition on silence
            try { start(); } catch { done(this.capturedText); }
          }
        };

        rec.onerror = (e: any) => {
          if (this.sessionId !== myId) { this.recognition = null; return; }
          this.recognition = null;

          if (e.error === 'not-allowed') {
            if (!errorShown) {
              errorShown = true;
              onError?.('Microphone access was denied. Allow mic in browser settings, or type your answer below.');
            }
            done('');
          } else if (e.error === 'network') {
            if (!errorShown) {
              errorShown = true;
              onError?.('Speech recognition needs an internet connection. Type your answer below.');
            }
            done('');
          } else if (e.error === 'aborted') {
            // fired by rec.stop() — onend will handle resolve
          } else if (e.error === 'no-speech') {
            // browser will fire onend and we auto-restart
          } else {
            if (!errorShown) {
              errorShown = true;
              onError?.(`Mic error (${e.error}). Type your answer below.`);
            }
            done('');
          }
        };

        try { rec.start(); } catch { done(this.capturedText); }
      };

      start();
    });
  }

  /**
   * Stops the current STT session and resolves the listen() promise immediately.
   * Safe to call even when recognition is null (e.g. during the auto-restart gap).
   */
  stopListening(): void {
    this.manualStop = true;
    if (this.recognition) {
      this.recognition.stop();
      // onend will fire and call done() via the normal path
    } else {
      // Recognition is null (mid-restart gap) — resolve directly
      // Bump sessionId so any pending start() from the old closure becomes a no-op
      this.sessionId++;
      const resolve = this.activeResolve;
      const text = this.capturedText;
      this.activeResolve = null;
      if (resolve) resolve(text);
    }
  }
}
