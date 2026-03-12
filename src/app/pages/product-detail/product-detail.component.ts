import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PharmacyProduct } from '../../models/pharmacy-product.model';
import { PharmacyProductService } from '../../services/pharmacy-product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  pharmacyService = inject(PharmacyProductService);
  destroyRef = inject(DestroyRef);

  product: PharmacyProduct | null = null;
  loading = true;
  selectedTab = 'indications';

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(productId: string): void {
    this.loading = true;
    this.pharmacyService.getProductById(productId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (product) => {
          if (product) {
            this.product = product;
          } else {
            this.router.navigate(['/manufacturing']);
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.router.navigate(['/manufacturing']);
        }
      });
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/assets/manufactured/placeholder.svg';
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
