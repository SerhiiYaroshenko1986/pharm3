import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './components/cart/cart.component';
import { ManufacturingComponent } from './components/manufacturing-component/manufacturing.component';
import { AboutComponent } from './components/about-component/about.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to main
];
