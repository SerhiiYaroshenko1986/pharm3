import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy-service.service';
import { MapComponent } from '../../components/map-component/map.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  pharmacyService = inject(PharmacyService);
  pharmacyLocations = this.pharmacyService.pharmacyLocations;

  navigateToPharmacy(pharmacy: any): void {
    const address = encodeURIComponent(pharmacy.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  }

  callPhone(phone: string): void {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  }
}
