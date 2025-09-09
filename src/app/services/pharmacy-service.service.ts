import { Injectable, signal } from '@angular/core';

export interface PharmacyLocation {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates?: { lat: number; lng: number };
}

export interface ProductCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  count: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  private cartItemsCount = signal(3);
  
  readonly pharmacyLocations: PharmacyLocation[] = [
    {
      id: 1,
      name: 'Центральна аптека',
      address: 'вул. Хрещатик, 15, Київ',
      phone: '+380 44 123-45-67',
      hours: '24/7'
    },
    {
      id: 2,
      name: 'Аптека "Здоров\'я"',
      address: 'вул. Лесі Українки, 23, Київ',
      phone: '+380 44 234-56-78',
      hours: '8:00-22:00'
    },
    {
      id: 3,
      name: 'Сімейна аптека',
      address: 'пр. Перемоги, 45, Київ',
      phone: '+380 44 345-67-89',
      hours: '9:00-21:00'
    }
  ];

  readonly productCategories: ProductCategory[] = [
    { id: 1, name: 'Рецептурні ліки', icon: '💊', description: 'За призначенням лікаря', count: '1,200+' },
    { id: 2, name: 'Натуральні засоби', icon: '🌱', description: 'Фітопрепарати та БАДи', count: '800+' },
    { id: 3, name: 'Дитяче здоров\'я', icon: '👶', description: 'Безпечні засоби для малюків', count: '600+' },
    { id: 4, name: 'Краса та догляд', icon: '💄', description: 'Косметика та гігієна', count: '900+' },
    { id: 5, name: 'Медтехніка', icon: '🏥', description: 'Прилади та аксесуари', count: '400+' },
    { id: 6, name: 'Профілактика', icon: '🌿', description: 'Вітаміни та імунітет', count: '700+' }
  ];

  readonly features: Feature[] = [
    {
      id: 1,
      icon: '🏭',
      title: 'Власне виробництво',
      description: 'Контролюємо якість на всіх етапах - від сировини до готового продукту'
    },
    {
      id: 2,
      icon: '🌿',
      title: 'Натуральні препарати',
      description: 'Спеціалізуємося на натуральних та безпечних препаратах для здоров\'я'
    },
    {
      id: 3,
      icon: '👨‍⚕️',
      title: 'Професійні консультації',
      description: 'Кваліфіковані фармацевти надають експертні поради'
    },
    {
      id: 4,
      icon: '🚚',
      title: 'Зручна доставка',
      description: 'Швидка доставка або самовивіз з найближчої аптеки'
    }
  ];

  getCartCount = this.cartItemsCount.asReadonly();

  addToCart(): void {
    this.cartItemsCount.update(count => count + 1);
  }

  searchProducts(query: string): void {
    console.log(`Searching for: ${query}`);
    // Implement actual search logic here
  }
}