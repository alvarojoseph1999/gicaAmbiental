import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/public-layout/public-layout.component'),

    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component'),
      },
      {
        path: 'collaboration',
        loadComponent: () =>
          import('./pages/collaboration/collaboration.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
      },
      {
        path: 'education',
        loadComponent: () => import('./pages/education/education.component'),
      },
      {
        path: 'history',
        loadComponent: () => import('./pages/history/history.component'),
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'objetives',
        loadComponent: () => import('./pages/objetives/objetives.component'),
      },
      {
        path: 'team',
        loadComponent: () => import('./pages/team/team.component'),
      },
      {
        path: 'workteam',
        loadComponent: () => import('./pages/workteam/workteam.component'),
      },
    ],
  },
];
export default publicRoutes;
