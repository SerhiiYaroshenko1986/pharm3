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
      name: 'Аптека №1',
      address: 'вул.Степана Бандери, 62, Івано-Франківськ',
      phone: '+38 068 940 4672',
      hours: '8:00-21:00'
    },
    {
      id: 2,
      name: 'Аптека №2',
      address: 'вул. Загорівська, 4, Київ, 02000',
      phone: '+38 097 203 2504',
      hours: '8:00-21:00'
    },
    {
      id: 3,
      name: 'Аптека №3',
      address: 'вул.Генерала Шухевича, 4, Луцьк',
      phone: '+38 097 203 2505',
      hours: '8:00-21:00'
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