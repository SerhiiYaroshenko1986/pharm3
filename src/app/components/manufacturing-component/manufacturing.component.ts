import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollService } from '../../services/scroll.service';
import { PharmacyProductService } from '../../services/pharmacy-product.service';
import { PharmacyCategory, PharmacyProduct } from '../../models/pharmacy-product.model';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
  sortBy = 'default';
  mobileCatOpen = false;

  get sortedProducts(): PharmacyProduct[] {
    if (!this.selectedCategory) return [];
    const products = [...this.selectedCategory.products];
    if (this.sortBy === 'price-asc') products.sort((a, b) => a.price - b.price);
    else if (this.sortBy === 'price-desc') products.sort((a, b) => b.price - a.price);
    else if (this.sortBy === 'name') products.sort((a, b) => a.name.localeCompare(b.name));
    return products;
  }

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
    this.sortBy = 'default';
    this.mobileCatOpen = false;
  }

  selectCategoryById(event: Event): void {
    const id = (event.target as HTMLSelectElement).value;
    const cat = this.categories.find(c => c.id === id);
    if (cat) this.selectCategory(cat);
  }

  onSortChange(event: Event): void {
    this.sortBy = (event.target as HTMLSelectElement).value;
  }

  navigateToProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/manufactured/placeholder.svg';
  }
}
