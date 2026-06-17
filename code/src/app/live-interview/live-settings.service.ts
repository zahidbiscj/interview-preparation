import { Injectable, signal } from '@angular/core';
import { LiveSettings, DEFAULT_LIVE_SETTINGS } from './live-interview.models';

const SETTINGS_KEY = 'live.settings';

@Injectable({ providedIn: 'root' })
export class LiveSettingsService {
  private _settings = signal<LiveSettings>(this.load());
  readonly settings = this._settings.asReadonly();

  update(patch: Partial<LiveSettings>): void {
    this._settings.update(s => {
      const next = { ...s, ...patch };
      this.persist(next);
      return next;
    });
  }

  private load(): LiveSettings {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      return raw ? { ...DEFAULT_LIVE_SETTINGS, ...JSON.parse(raw) } : { ...DEFAULT_LIVE_SETTINGS };
    } catch {
      return { ...DEFAULT_LIVE_SETTINGS };
    }
  }

  private persist(s: LiveSettings): void {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch { /* quota */ }
  }
}
