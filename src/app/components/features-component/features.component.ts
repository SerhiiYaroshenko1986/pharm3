import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy-service.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  pharmacyService = inject(PharmacyService);
  features = this.pharmacyService.features;
}
