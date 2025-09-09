import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy-service.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
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
