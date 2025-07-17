import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {NavBarComponent} from '@shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-project';
  currentYear = new Date().getFullYear();

  constructor(private translate: TranslateService) {
    // Налаштування мов
    translate.addLangs(['uk', 'en']);
    translate.setDefaultLang('uk');

    // Визначення мови браузера
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/uk|en/) ? browserLang : 'uk');

    console.log('Current language set to:', translate.currentLang);
  }

  ngOnInit(): void {
    // Додаткова ініціалізація за необхідності
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
