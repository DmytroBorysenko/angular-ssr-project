import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  signal,
  Signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';
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
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.currentUrl = toSignal(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router?.url || 'home'),
      ),
    );

    effect(() => {
      console.log(this.currentUrl());
    });
  }

  public toggleMenu(): void {
    this.isOpen.update(isOpen => !isOpen);
    document.body.style.overflow = this.isOpen() ? 'hidden' : 'auto';
  }
}
