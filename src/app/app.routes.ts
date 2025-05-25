import { Routes } from '@angular/router';

// import { DashboardModule } from './dashboard/dashboard.module';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.routes').then((m) => m.publicRoutes), //  accede a publicRoutes correctamente
  },
  //   {
  //     path: 'dashboard',
  //     loadChildren: () =>
  //       import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  //   },
  {
    path: '**',
    redirectTo: '',
  },
];
