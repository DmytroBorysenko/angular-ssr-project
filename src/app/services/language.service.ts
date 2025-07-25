import {Injectable, signal} from '@angular/core';

export type Language = 'en'; // | 'uk'; // Temporarily disabled Ukrainian language

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLanguage = signal<Language>('en'); // Changed default to English

  /**
   * Current language as a readonly signal
   */
  public currentLanguage = this._currentLanguage.asReadonly();

  constructor() {}

  /**
   * Change the current language
   */
  setLanguage(lang: Language): void {
    this._currentLanguage.set(lang);
    // Here you would implement actual localization logic
  }
}
