import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VoiceService {
  readonly sttSupported =
    typeof window !== 'undefined' &&
    !!((window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition);

  private recognition: any = null;

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
      utter.onerror = () => resolve(); // never block the flow on TTS error
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
   *  - silence of `silenceMs` is detected (auto-stop), OR
   *  - stopListening() is called externally (e.g. "Done Speaking" tap).
   * `onText` receives the live interim+final text as the user speaks.
   * `onError` is called if mic permission is denied — resolve('') is still called so the
   * caller can fall back to textarea mode.
   */
  listen(
    onText: (t: string) => void,
    onError?: (msg: string) => void,
  ): Promise<string> {
    return new Promise(resolve => {
      if (!this.sttSupported) { resolve(''); return; }

      const SpeechRec = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
      const rec = new SpeechRec();
      this.recognition = rec;
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = 'en-US';

      let finalText = '';

      rec.onresult = (event: any) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const part = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalText += part + ' ';
          else interim = part;
        }
        onText(finalText + interim);
      };

      rec.onend = () => {
        this.recognition = null;
        resolve(finalText.trim());
      };

      rec.onerror = (e: any) => {
        this.recognition = null;
        if (e.error === 'not-allowed') {
          onError?.('Microphone access was denied. Allow mic in browser settings, or type your answer below.');
        } else if (e.error === 'network') {
          onError?.('Speech recognition needs an internet connection (Chrome uses Google servers). Type your answer below.');
        } else if (e.error !== 'no-speech') {
          onError?.(`Mic error (${e.error}). Type your answer below.`);
        }
        resolve(finalText.trim());
      };

      rec.start();
    });
  }

  /** Stops the current STT session — triggers onend which resolves the listen() promise. */
  stopListening(): void {
    this.recognition?.stop();
  }
}
