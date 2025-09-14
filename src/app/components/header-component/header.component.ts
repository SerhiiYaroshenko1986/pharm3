import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PharmacyService } from '../../services/pharmacy-service.service';
import { ScrollService } from '../../services/scroll-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollService = inject(ScrollService);
  pharmacyService = inject(PharmacyService);
  router = inject(Router);
  
  isScrolled = this.scrollService.isScrolled;
  cartCount = this.pharmacyService.getCartCount;
  isMobileMenuOpen = signal(false);
  searchQuery = signal('');

  navigation = [
    { name: 'Головна', id: 'home' },
    { name: 'Каталог товарів (роздрібний відпуск)', id: 'products' },
    { name: 'Індивідуальне виготовлення (Екстемпоральні лікарські засоби)', id: 'manufacturing' },
    { name: 'Аптеки', id: 'locations' },
    { name: 'Про нас', id: 'about' },
    { name: 'Контакти', id: 'contact' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  handleSearch(): void {
    const query = this.searchQuery();
    if (query.trim()) {
      this.pharmacyService.searchProducts(query);
    }
  }

  navigateToPage(id: string) {
    this.router.navigateByUrl(id);
  }
}
