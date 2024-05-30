import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./components/bienvenida/bienvenida.component').then(
        (m) => m.BienvenidaComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'altaProducto',
    loadComponent: () =>
      import('./components/alta-producto/alta-producto.component').then(
        (m) => m.AltaProductoComponent
      ),
    canActivate: [loginGuard],
  },
  {
    path: 'mostrarProductos',
    loadComponent: () =>
      import('./components/productos-mostrar/productos-mostrar.component').then(
        (m) => m.ProductosMostrarComponent
      ),
    canActivate: [loginGuard],
  },
  {
    path: 'listarProductos',
    loadComponent: () =>
      import('./components/lista-publica/lista-publica.component').then(
        (m) => m.ListaPublicaComponent
      ),
  },
  {
    path: 'abmProductos',
    loadComponent: () =>
      import('./components/abm-producto/abm-producto.component').then(
        (m) => m.AbmProductoComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'bienvenida',
  },
];
