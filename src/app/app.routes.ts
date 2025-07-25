import {Routes} from '@angular/router';

const baseRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact',
  },
];

export const routes: Routes = [
  // Default English routes (no prefix)
  ...baseRoutes,

  // Ukrainian routes (with /ua prefix) - Temporarily disabled
  // {
  //   path: 'ua',
  //   children: [...baseRoutes],
  // },

  // Redirect to default language
  {
    path: '**',
    redirectTo: '',
  },
];
