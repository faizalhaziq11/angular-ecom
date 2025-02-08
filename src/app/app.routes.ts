import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: ()=> {
    return import('./home/home.component').then(m => m.HomeComponent)
  }
}, {
  path: "/products",
}, 
{
  path: "/products/:id"
}];
