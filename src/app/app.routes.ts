import { Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.routes').then((m) => m.publicRoutes), //  accede a publicRoutes correctamente
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
