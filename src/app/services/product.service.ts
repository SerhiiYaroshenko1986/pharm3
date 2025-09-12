import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  manufacturer?: string;
  available?: boolean;
  dosage?: string;
  country?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Mock product data
  private products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'Парацетамол',
      description: 'Знеболюючий та жарознижуючий засіб.',
      price: 45,
      image: 'assets/products/1.jpg',
      category: 'Знеболюючі',
      manufacturer: 'Дарниця',
      available: true,
      dosage: '500 мг, 10 таблеток',
      country: 'Україна'
    },
    {
      id: 2,
      name: 'Ібупрофен',
      description: 'Протизапальний та знеболюючий препарат.',
      price: 60,
      image: 'assets/products/2.jpg',
      category: 'Протизапальні',
      manufacturer: 'Здоров\'я',
      available: true,
      dosage: '200 мг, 20 таблеток',
      country: 'Україна'
    },
    {
      id: 3,
      name: 'Аспірин',
      description: 'Анальгетик та жарознижуючий засіб.',
      price: 55,
      image: 'assets/products/3.jpg',
      category: 'Анальгетики',
      manufacturer: 'Bayer',
      available: false,
      dosage: '500 мг, 10 таблеток',
      country: 'Німеччина'
    },
    {
      id: 4,
      name: 'Но-шпа',
      description: 'Спазмолітичний засіб для зняття болю.',
      price: 70,
      image: 'assets/products/4.jpg',
      category: 'Спазмолітики',
      manufacturer: 'Sanofi',
      available: true,
      dosage: '40 мг, 24 таблетки',
      country: 'Угорщина'
    },
    {
      id: 5,
      name: 'Цитрамон',
      description: 'Комбінований анальгетик для зняття головного болю.',
      price: 50,
      image: 'assets/products/5.jpg',
      category: 'Анальгетики',
      manufacturer: 'Фармак',
      available: true,
      dosage: '10 таблеток',
      country: 'Україна'
    },
    {
      id: 6,
      name: 'Амоксиклав',
      description: 'Антибіотик широкого спектру дії.',
      price: 120,
      image: 'assets/products/6.jpg',
      category: 'Антибіотики',
      manufacturer: 'Sandoz',
      available: false,
      dosage: '500/125 мг, 14 таблеток',
      country: 'Словенія'
    },
    {
      id: 7,
      name: 'Лоратадин',
      description: 'Антигістамінний препарат для лікування алергії.',
      price: 40,
      image: 'assets/products/7.jpg',
      category: 'Антигістамінні',
      manufacturer: 'Stada',
      available: true,
      dosage: '10 мг, 10 таблеток',
      country: 'Україна'
    },
    {
      id: 8,
      name: 'Мезим',
      description: 'Ферментний препарат для покращення травлення.',
      price: 65,
      image: 'assets/products/8.jpg',
      category: 'Ферменти',
      manufacturer: 'Berlin-Chemie',
      available: true,
      dosage: '20 таблеток',
      country: 'Німеччина'
    },
    {
      id: 9,
      name: 'Смекта',
      description: 'Препарат для лікування діареї та розладів шлунку.',
      price: 80,
      image: 'assets/products/9.jpg',
      category: 'Сорбенти',
      manufacturer: 'Ipsen',
      available: true,
      dosage: '3 г, 10 пакетиків',
      country: 'Франція'
    },
    {
      id: 10,
      name: 'Активоване вугілля',
      description: 'Сорбент для очищення організму від токсинів.',
      price: 25,
      image: 'assets/products/10.jpg',
      category: 'Сорбенти',
      manufacturer: 'Дарниця',
      available: true,
      dosage: '250 мг, 10 таблеток',
      country: 'Україна'
    },
    {
      id: 11,
      name: 'Нурофен Форте',
      description: 'Знеболюючий, жарознижуючий та протизапальний препарат для дорослих і дітей від 12 років.',
      price: 98,
      image: 'assets/products/11.jpg',
      category: 'Знеболюючі',
      manufacturer: 'Reckitt Benckiser',
      available: true,
      dosage: '400 мг, 20 таблеток',
      country: 'Великобританія'
    }
  ]);

  getProducts(): Observable<Product[]> {
    // Simulate async fetch
    setTimeout(() => {
      this.products.next(this.products.getValue());
    }, 100);
    return this.products.asObservable();
  }
}
