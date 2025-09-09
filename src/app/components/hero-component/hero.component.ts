import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll-service.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{
 scrollService = inject(ScrollService);

  heroStats = [
    { number: '50+', label: 'Аптек по Україні' },
    { number: '15+', label: 'Років досвіду' },
    { number: '5000+', label: 'Товарів в асортименті' }
  ];
}
