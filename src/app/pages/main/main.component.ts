import { Component } from '@angular/core';
import { CategoriesComponent } from '../../components/categories-component/categories.component';
import { FeaturesComponent } from '../../components/features-component/features.component';
import { HeaderComponent } from '../../components/header-component/header.component';
import { HeroComponent } from '../../components/hero-component/hero.component';
import { LocationsComponent } from '../../components/locations-component/locations.component';
import { ManufacturingComponent } from '../../components/manufacturing-component/manufacturing.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CategoriesComponent,
    LocationsComponent,
    ManufacturingComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
