import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, signal, effect} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';

import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {filter, map} from 'rxjs/operators';

import {MENU_ACTIVE_PAGE_MAP, MENU_LIST} from '@shared/entities/constants/menu-list.constants';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  protected readonly MENU_LIST = MENU_LIST;
  protected currentUrl = signal<string>('home');
  protected isOpen = signal<boolean>(false);
  protected activePage = signal<string>('');

  private router = inject(Router);
  private translate = inject(TranslateService);

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router?.url || 'home'),
      )
      .subscribe(url => this.currentUrl.set(url));

    effect(() => {
      if (this.currentUrl()) {
        this.activePage.set(
          MENU_ACTIVE_PAGE_MAP[this.currentUrl() as keyof typeof MENU_ACTIVE_PAGE_MAP],
        );
      }
    });
  }

  public toggleMenu(): void {
    this.isOpen.update(isOpen => !isOpen);
    document.body.style.overflow = this.isOpen() ? 'hidden' : 'auto';
  }

  public toggleSubMenu(navLink: any, isOpen: boolean): void {
    navLink.isOpen = isOpen;
  }

  // Метод для генерації URL з урахуванням мови
  protected getLanguageAwareUrl(path: string): string {
    // const currentLang = this.translate.currentLang;

    // Видаляємо потенційний префікс `/ua` на випадок, якщо path уже має його
    const cleanedPath = path.replace(/^\/?(ua\/)?/, '');

    // Temporarily disabled Ukrainian language logic
    // // Якщо мова українська, додаємо префікс /ua
    // if (currentLang === 'uk') {
    //   return `/ua/${cleanedPath}`;
    // }

    // Інакше (англійська за замовчуванням)
    return `/${cleanedPath}`;
  }

  // Метод для перевірки активного стану з урахуванням мови
  protected isActive(path: string): boolean {
    const currentUrl = this.currentUrl();
    if (!currentUrl) return false;

    // const currentLang = this.translate.currentLang;

    // Очищаємо path від потенційних префіксів
    const cleanedPath = path.replace(/^\/?(ua\/)?/, '');

    // Temporarily disabled Ukrainian language logic
    // if (currentLang === 'uk') {
    //   return currentUrl === `/ua/${cleanedPath}` || currentUrl === `/ua/${cleanedPath}/`;
    // } else {
    //   return currentUrl === `/${cleanedPath}` || currentUrl === `/${cleanedPath}/`;
    // }

    return currentUrl === `/${cleanedPath}` || currentUrl === `/${cleanedPath}/`;
  }
}
