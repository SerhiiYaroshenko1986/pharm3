import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PharmacyData, PharmacyCategory, PharmacyProduct } from '../models/pharmacy-product.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacyProductService {
  private dataUrl = '/assets/pharmacy-products.json';
  private cachedData: PharmacyData | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Отримати всі дані про категорії та продукти
   */
  getAllData(): Observable<PharmacyData> {
    if (this.cachedData) {
      return of(this.cachedData);
    }
    
    return this.http.get<PharmacyData>(this.dataUrl).pipe(
      map(data => {
        this.cachedData = data;
        return data;
      }),
      catchError(error => {
        console.error('Error loading pharmacy products:', error);
        return of({ categories: [] });
      })
    );
  }

  /**
   * Отримати всі категорії
   */
  getCategories(): Observable<PharmacyCategory[]> {
    return this.getAllData().pipe(
      map(data => data.categories)
    );
  }

  /**
   * Отримати категорію за ID
   */
  getCategoryById(id: string): Observable<PharmacyCategory | undefined> {
    return this.getAllData().pipe(
      map(data => data.categories.find(cat => cat.id === id))
    );
  }

  /**
   * Отримати всі продукти з усіх категорій
   */
  getAllProducts(): Observable<PharmacyProduct[]> {
    return this.getAllData().pipe(
      map(data => {
        const allProducts: PharmacyProduct[] = [];
        data.categories.forEach(category => {
          allProducts.push(...category.products);
        });
        return allProducts;
      })
    );
  }

  /**
   * Отримати продукти конкретної категорії
   */
  getProductsByCategory(categoryId: string): Observable<PharmacyProduct[]> {
    return this.getCategoryById(categoryId).pipe(
      map(category => category?.products || [])
    );
  }

  /**
   * Отримати продукт за ID
   */
  getProductById(productId: string): Observable<PharmacyProduct | undefined> {
    return this.getAllProducts().pipe(
      map(products => products.find(product => product.id === productId))
    );
  }

  /**
   * Пошук продуктів за назвою або описом
   */
  searchProducts(query: string): Observable<PharmacyProduct[]> {
    const lowerQuery = query.toLowerCase();
    
    return this.getAllProducts().pipe(
      map(products => 
        products.filter(product =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.composition.toLowerCase().includes(lowerQuery) ||
          product.indications.toLowerCase().includes(lowerQuery)
        )
      )
    );
  }

  /**
   * Фільтрація продуктів за наявністю
   */
  getAvailableProducts(): Observable<PharmacyProduct[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.inStock))
    );
  }

  /**
   * Отримати продукти за діапазоном цін
   */
  getProductsByPriceRange(minPrice: number, maxPrice: number): Observable<PharmacyProduct[]> {
    return this.getAllProducts().pipe(
      map(products => 
        products.filter(product => 
          product.price >= minPrice && product.price <= maxPrice
        )
      )
    );
  }
}
