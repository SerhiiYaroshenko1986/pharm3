import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to main
];
