import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./../layouts/dashboard-layout/dashboard-layout.component'),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './../dashboard/pages/gicadashboard/gicadashboard.component'
          ).then((m) => m.GicadashboardComponent),
      },
      {
        path: 'clima',
        loadComponent: () =>
          import('./../dashboard/pages/clima/clima.component').then(
            (m) => m.ClimaComponent
          ),
      },
      {
        path: 'temperatura',
        loadComponent: () =>
          import('./../dashboard/pages/temperatura/temperatura.component').then(
            (m) => m.TemperaturaComponent
          ),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import(
            './../dashboard/pages/configuracion/configuracion.component'
          ).then((m) => m.ConfiguracionComponent),
      },

      // {
      //   path: 'configuracionPublic',
      //   loadComponent: () =>
      //     import(
      //       './../dashboard/pages/configuracion-public/configuracion-public.component'
      //     ).then((m) => m.ConfiguracionPublicComponent),
      // },
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
export default dashboardRoutes;
