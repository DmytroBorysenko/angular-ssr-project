import {ChangeDetectionStrategy, Component, inject, signal, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterModule} from '@angular/router';

import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {filter, map} from 'rxjs/operators';

import {MENU_LIST} from '@shared/entities/constants/menu-list.constants';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  protected readonly MENU_LIST = MENU_LIST;
  protected currentUrl: Signal<string | undefined>;
  protected isOpen = signal(false);

  private router = inject(Router);
  private translate = inject(TranslateService);

  constructor() {
    this.currentUrl = toSignal(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router?.url || 'home'),
      ),
    );
  }

  public toggleMenu(): void {
    this.isOpen.update(isOpen => !isOpen);
    document.body.style.overflow = this.isOpen() ? 'hidden' : 'auto';
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
