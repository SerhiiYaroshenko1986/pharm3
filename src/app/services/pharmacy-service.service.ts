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
    { id: 1, name: 'Рецептурні ліки', icon: 'assets/categories/prescription-drugs.svg', description: 'За призначенням лікаря', count: '1,200+' },
    { id: 2, name: 'Натуральні засоби', icon: 'assets/categories/natural-remedies.svg', description: 'Фітопрепарати та БАДи', count: '800+' },
    { id: 3, name: 'Дитяче здоров\'я', icon: 'assets/categories/childrens-health.svg', description: 'Безпечні засоби для малюків', count: '600+' },
    { id: 4, name: 'Краса та догляд', icon: 'assets/categories/beauty-care.svg', description: 'Косметика та гігієна', count: '900+' },
    { id: 5, name: 'Медтехніка', icon: 'assets/categories/medical-equipment.svg', description: 'Прилади та аксесуари', count: '400+' },
    { id: 6, name: 'Профілактика', icon: 'assets/categories/prevention.svg', description: 'Вітаміни та імунітет', count: '700+' }
  ];

  readonly features: Feature[] = [
    {
      id: 1,
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      title: 'Власне виробництво',
      description: 'Контролюємо якість на всіх етапах - від сировини до готового продукту'
    },
    {
      id: 2,
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      title: 'Натуральні препарати',
      description: 'Спеціалізуємося на натуральних та безпечних препаратах для здоров\'я'
    },
    {
      id: 3,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Професійні консультації',
      description: 'Кваліфіковані фармацевти надають експертні поради'
    },
    {
      id: 4,
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
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