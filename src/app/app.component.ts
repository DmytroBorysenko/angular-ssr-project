import {Component, OnInit, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {NavBarComponent} from '@shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-project';
  currentYear = new Date().getFullYear();
  private router = inject(Router);

  constructor() {
    // Angular built-in i18n will handle localization automatically
  }

  ngOnInit(): void {
    // Angular built-in i18n handles language detection from URL automatically
  }
}
