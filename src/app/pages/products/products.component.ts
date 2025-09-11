import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgFor], // Add NgFor here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Парацетамол',
      description: 'Знеболюючий та жарознижуючий засіб.',
      price: 45,
      image: 'assets/products/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Ібупрофен',
      description: 'Протизапальний та знеболюючий препарат.',
      price: 60,
      image: 'assets/products/ibuprofen.jpg'
    },
    // Add more products as needed
  ];
}
