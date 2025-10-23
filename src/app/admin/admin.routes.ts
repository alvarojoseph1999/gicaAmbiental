import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./../layouts/admin-layout/admin-layout.component'),

    children: [
      {
        path: 'dashboard_admin',
        loadComponent: () =>
          import(
            './../admin/pages/dashboard-admin/dashboard-admin.component'
          ).then((m) => m.DashboardAdminComponent),
      },
      {
        path: 'data',
        loadComponent: () =>
          import('./../admin/pages/data-admin/data-admin.component').then(
            (m) => m.DataAdminComponent
          ),
      },
      {
        path: 'public_web',
        loadComponent: () =>
          import(
            './../admin/pages/public-web-admin/public-web-admin.component'
          ).then((m) => m.PublicWebAdminComponent),
      },
      {
        path: 'user_admin',
        loadComponent: () =>
          import('./../admin/pages/user-admin/user-admin.component').then(
            (m) => m.UserAdminComponent
          ),
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
export default adminRoutes;
