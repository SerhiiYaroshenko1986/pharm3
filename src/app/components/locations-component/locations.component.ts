import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy-service.service';
import { MapComponent } from '../map-component/map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, MapComponent, GoogleMapsModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
 pharmacyService = inject(PharmacyService);
  pharmacyLocations = this.pharmacyService.pharmacyLocations;

  navigateToPharmacy(pharmacy: any): void {
    console.log(`Navigate to: ${pharmacy.name}`);
    // Implement navigation logic
  }
}
