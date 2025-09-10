import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header.component';
import { HeroComponent } from './components/hero-component/hero.component';
import { FeaturesComponent } from './components/features-component/features.component';
import { CategoriesComponent } from './components/categories-component/categories.component';
import { LocationsComponent } from './components/locations-component/locations.component';
import { ManufacturingComponent } from './components/manufacturing-component/manufacturing.component';
import { FooterComponent } from './components/footer-component/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CategoriesComponent,
    LocationsComponent,
    ManufacturingComponent,
    FooterComponent,
    GoogleMapsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organia-pharm';
}
