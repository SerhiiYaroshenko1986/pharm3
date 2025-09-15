import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  private scrollService = inject(ScrollService);
  
  searchQuery = '';
  isMobileMenuOpen = false; // You'll need to get this state from a service or parent component
  
  get headerHeight(): number {
    return this.scrollService.isScrolled() ? 60 : 80;
  }

  get isScrolled() {
    return this.scrollService.isScrolled;
  }

  handleSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement search logic
    }
  }
}
