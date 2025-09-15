import { Injectable, signal } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems = signal<CartItem[]>([]);
  
  cartItems = this._cartItems.asReadonly();
  
  get totalItems(): number {
    return this._cartItems().reduce((total, item) => total + item.quantity, 0);
  }
  
  get totalPrice(): number {
    return this._cartItems().reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this._cartItems();
    const existingItem = currentItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + quantity);
    } else {
      this._cartItems.set([...currentItems, { product, quantity }]);
    }
  }
  
  removeFromCart(productId: number): void {
    const currentItems = this._cartItems();
    this._cartItems.set(currentItems.filter(item => item.product.id !== productId));
  }
  
  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    const currentItems = this._cartItems();
    const updatedItems = currentItems.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    this._cartItems.set(updatedItems);
  }
  
  clearCart(): void {
    this._cartItems.set([]);
  }
}
