import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartService = inject(CartService);
  router = inject(Router);

  // Use the signal directly from the service
  get cartItems() {
    return this.cartService.cartItems();
  }

  get totalPrice(): number {
    return this.cartService.totalPrice;
  }

  get totalItems(): number {
    return this.cartService.totalItems;
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    // Force change detection
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  checkout(): void {
    alert(`Оформлення замовлення на суму: ${this.totalPrice} грн`);
    this.clearCart();
    this.router.navigate(['/']);
  }
}
