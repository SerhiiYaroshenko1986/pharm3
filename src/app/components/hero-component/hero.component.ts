import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

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
    { number: '3+', label: 'Аптек по Україні' },
    { number: '5000+', label: 'Товарів в асортименті' }
  ];
}
