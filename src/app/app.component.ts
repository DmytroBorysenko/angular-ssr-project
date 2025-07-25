import {Component, OnInit, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {NavBarComponent} from '@shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-project';
  currentYear = new Date().getFullYear();
  private router = inject(Router);

  constructor(private translate: TranslateService) {
    // Налаштування мов - Temporarily disabled Ukrainian
    translate.addLangs(['en']); // , 'uk' - temporarily disabled
    translate.setDefaultLang('en');

    // Визначення мови з URL
    this.detectLanguageFromUrl();
  }

  ngOnInit(): void {
    // Слухаємо зміни URL для перемикання мови
    this.router.events.subscribe(() => {
      this.detectLanguageFromUrl();
    });
  }

  private detectLanguageFromUrl(): void {
    // Temporarily disabled Ukrainian language detection
    // const url = this.router.url;
    // if (url.startsWith('/ua')) {
    //   this.translate.use('uk');
    // } else {
    //   this.translate.use('en');
    // }

    // Always use English for now
    this.translate.use('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);

    // Temporarily disabled Ukrainian language switching logic
    // // Оновлюємо URL відповідно до мови
    // const currentUrl = this.router.url;
    // let newUrl = currentUrl;

    // if (lang === 'uk') {
    //   // Переходимо на українську версію
    //   if (!currentUrl.startsWith('/ua')) {
    //     newUrl = '/ua' + currentUrl;
    //   }
    // } else {
    //   // Переходимо на англійську версію (без префікса)
    //   if (currentUrl.startsWith('/ua')) {
    //     newUrl = currentUrl.replace('/ua', '');
    //   }
    // }

    // this.router.navigateByUrl(newUrl);
  }
}
