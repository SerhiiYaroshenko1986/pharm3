import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy-service.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  pharmacyService = inject(PharmacyService);
  categories = this.pharmacyService.productCategories;

  selectCategory(category: any): void {
    console.log(`Selected category: ${category.name}`);
    // Navigate to category page
  }
}
