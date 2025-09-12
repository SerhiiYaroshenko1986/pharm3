import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  products: Product[] = [];
  loading = true;

  // categories tree (simple example) - you can generate dynamically if needed
  categories = [
    { name: 'All' },
    { name: 'Знеболюючі' },
    { name: 'Протизапальні' },
    { name: 'Анальгетики' },
    { name: 'Спазмолітики' },
    { name: 'Антибіотики' },
    { name: 'Антигістамінні' },
    { name: 'Ферменти' },
    { name: 'Сорбенти' }
  ];

  selectedCategory = 'All';

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(list => {
        this.products = list;
        this.loading = false;
      });
  }

  selectCategory(name: string) {
    this.selectedCategory = name;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }
}
