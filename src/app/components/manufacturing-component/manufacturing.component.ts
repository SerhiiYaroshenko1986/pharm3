import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollService } from '../../services/scroll.service';
import { PharmacyProductService } from '../../services/pharmacy-product.service';
import { PharmacyCategory, PharmacyProduct } from '../../models/pharmacy-product.model';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent implements OnInit {
  scrollService = inject(ScrollService);
  private pharmacyService = inject(PharmacyProductService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  categories: PharmacyCategory[] = [];
  selectedCategory: PharmacyCategory | null = null;
  loading = true;

  ngOnInit(): void {
    this.loading = true;
    this.pharmacyService.getCategories()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(categories => {
        this.categories = categories;
        if (categories.length > 0) {
          this.selectedCategory = categories[0];
        }
        this.loading = false;
      });
  }

  selectCategory(category: PharmacyCategory): void {
    this.selectedCategory = category;
  }

  navigateToProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/manufactured/placeholder.svg';
  }
}
