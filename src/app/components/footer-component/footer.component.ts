import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  newsletterEmail = signal('');

  subscribeNewsletter(): void {
    const email = this.newsletterEmail();
    if (email) {
      console.log(`Newsletter subscription for: ${email}`);
      this.newsletterEmail.set('');
      // Implement subscription logic
    }
  }
}
