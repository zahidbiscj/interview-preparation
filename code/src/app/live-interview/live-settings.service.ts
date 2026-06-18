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
      if (!raw) return { ...DEFAULT_LIVE_SETTINGS };
      const stored = JSON.parse(raw) as Partial<LiveSettings>;
      // If no key was saved by the user, fall back to the environment-injected key
      if (!stored.openrouterKey?.trim()) stored.openrouterKey = DEFAULT_LIVE_SETTINGS.openrouterKey;
      if (!stored.model?.trim()) stored.model = DEFAULT_LIVE_SETTINGS.model;
      return { ...DEFAULT_LIVE_SETTINGS, ...stored };
    } catch {
      return { ...DEFAULT_LIVE_SETTINGS };
    }
  }

  private persist(s: LiveSettings): void {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch { /* quota */ }
  }
}
