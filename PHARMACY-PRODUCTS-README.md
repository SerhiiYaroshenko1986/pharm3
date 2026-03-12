# Лікарські засоби індивідуального виробництва

## Структура даних

JSON файл `src/assets/pharmacy-products.json` містить інформацію про лікарські засоби, які виробляються аптекою індивідуально.

### Категорії

- **Проктологія** (10 препаратів)
- **Урологія** (20 препаратів)
- **Гінекологія** (41 препарат)
- **Педіатрія** (10 препаратів)
- **Отоларингологія** (7 препаратів)

**Всього: 88 препаратів**

## Використання в Angular

### 1. Імпортувати сервіс

```typescript
import { PharmacyProductService } from './services/pharmacy-product.service';
```

### 2. Використання в компоненті

```typescript
export class ProductsComponent implements OnInit {
  categories$ = this.pharmacyService.getCategories();
  
  constructor(private pharmacyService: PharmacyProductService) {}
  
  ngOnInit() {
    // Отримати всі категорії
    this.pharmacyService.getCategories().subscribe(categories => {
      console.log(categories);
    });
    
    // Отримати продукти категорії
    this.pharmacyService.getProductsByCategory('proktolohiia').subscribe(products => {
      console.log(products);
    });
    
    // Пошук продуктів
    this.pharmacyService.searchProducts('прополіс').subscribe(products => {
      console.log(products);
    });
  }
}
```

### 3. Приклад відображення в шаблоні

```html
<!-- Список категорій -->
<div *ngFor="let category of categories$ | async">
  <h2>{{ category.name }}</h2>
  <p>{{ category.description }}</p>
  
  <!-- Продукти в категорії -->
  <div *ngFor="let product of category.products">
    <h3>{{ product.name }}</h3>
    <img [src]="product.imageUrl" [alt]="product.name">
    
    <div class="product-details">
      <h4>Склад:</h4>
      <p>{{ product.composition }}</p>
      
      <h4>Показання до застосування:</h4>
      <p>{{ product.indications }}</p>
      
      <h4>Спосіб застосування:</h4>
      <p>{{ product.dosageAndAdministration }}</p>
      
      <p><strong>Виробник:</strong> {{ product.manufacturer }}</p>
      <p><strong>Упаковка:</strong> {{ product.packaging }}</p>
      <p *ngIf="product.price > 0"><strong>Ціна:</strong> {{ product.price }} грн</p>
      <span *ngIf="product.inStock" class="badge-success">В наявності</span>
    </div>
  </div>
</div>
```

## Поля продукту

Кожен продукт містить наступні поля:

- `id` - унікальний ідентифікатор
- `name` - назва препарату
- `composition` - склад
- `dosageForm` - лікарська форма
- `physicalProperties` - фізико-хімічні властивості (опціонально)
- `pharmacologicalProperties` - фармакологічні властивості
- `indications` - показання до застосування
- `contraindications` - протипоказання
- `specialInstructions` - особливості застосування (опціонально)
- `sideEffects` - побічні ефекти (опціонально)
- `dosageAndAdministration` - спосіб застосування та дози
- `storageConditions` - умови зберігання
- `packaging` - упаковка
- `manufacturer` - виробник
- `price` - ціна (число)
- `inStock` - наявність (boolean)
- `imageUrl` - URL зображення

## Оновлення даних

Для оновлення даних про препарати:

1. Оновіть файл `Docs/all-info.txt`
2. Запустіть скрипт парсингу:
   ```bash
   node scripts/parse-products.js
   ```
3. JSON файл буде автоматично оновлено

## Маршрутизація

Рекомендовані маршрути:

```typescript
const routes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'products/category/:categoryId', component: CategoryProductsComponent },
  { path: 'products/:productId', component: ProductDetailComponent }
];
```

## Приклад використання з фільтрацією

```typescript
export class ProductsComponent implements OnInit {
  selectedCategory: string = '';
  searchQuery: string = '';
  products$!: Observable<PharmacyProduct[]>;
  
  constructor(private pharmacyService: PharmacyProductService) {}
  
  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
    if (this.selectedCategory) {
      this.products$ = this.pharmacyService.getProductsByCategory(this.selectedCategory);
    } else if (this.searchQuery) {
      this.products$ = this.pharmacyService.searchProducts(this.searchQuery);
    } else {
      this.products$ = this.pharmacyService.getAllProducts();
    }
  }
  
  onCategoryChange(categoryId: string) {
    this.selectedCategory = categoryId;
    this.loadProducts();
  }
  
  onSearch() {
    this.loadProducts();
  }
}
```
