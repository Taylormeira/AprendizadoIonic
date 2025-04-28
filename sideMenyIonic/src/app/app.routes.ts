import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'area-triangulo',
    loadComponent: () => import('./area-triangulo/area-triangulo.page').then( m => m.AreaTrianguloPage)
  },
  {
    path: 'area-circulo',
    loadComponent: () => import('./area-circulo/area-circulo.page').then( m => m.AreaCirculoPage)
  },
];
