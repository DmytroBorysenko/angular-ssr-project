import {Injectable, signal} from '@angular/core';

export type Language = 'uk' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLanguage = signal<Language>('uk');

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
    console.log(`Language changed to ${lang}`);
  }
}
