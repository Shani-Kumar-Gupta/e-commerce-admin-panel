import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ProductsWrapperComponent } from './products-wrapper.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './LoginModule',
      }).then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './DashboardModule',
      }).then((m) => m.DashboardModule),
  },
  // {
  //   path: 'products',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       exposedModule: './ProductsElement',
  //     }).then((m) => {
  //       const element = document.createElement('products-element');
  //       return class ProductsWrapper {
  //         constructor() {
  //           return element;
  //         }
  //       };
  //     }),
  // },
  {
    path: 'products',
    component: ProductsWrapperComponent,
  },
  {
    path: 'products/create',
    component: ProductsWrapperComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
