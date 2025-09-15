import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {
scrollService = inject(ScrollService);

  manufacturingBenefits = [
    {
      title: 'Індивідуальні рецепти',
      description: 'Виготовляємо ліки за унікальними рецептами лікарів'
    },
    {
      title: 'Контроль якості',
      description: 'Сертифіковане обладнання та суворі стандарти якості'
    },
    {
      title: 'Швидке виготовлення',
      description: 'Готуємо ваші ліки протягом 24-48 годин'
    }
  ];

  orderCustomManufacturing(): void {
    console.log('Opening custom manufacturing order form');
    // Implement order form logic
  }
}
