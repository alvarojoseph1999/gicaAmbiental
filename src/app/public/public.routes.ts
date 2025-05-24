// import { Routes } from '@angular/router';

// export const publicRoutes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('../layouts/public-layout/public-layout.component'),
//   },
//   {
//     path: 'education',
//     loadComponent: () => import('./pages/home/home.component'),
//   },

//   {
//     path: 'historia',
//     loadComponent: () => import('./pages/about/about.component'),
//   },
// ];
// export default publicRoutes;
import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../layouts/public-layout/public-layout.component'),
    children: [
      {
        path: '',
        redirectTo: 'education',
        pathMatch: 'full',
      },
      {
        path: 'education',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'historia',
        loadComponent: () => import('./pages/about/about.component'),
      },
    ],
  },
];
