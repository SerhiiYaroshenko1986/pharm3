import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './components/cart/cart.component';
import { LocationsComponent } from './components/locations-component/locations.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'locations', component: LocationsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to main
];
