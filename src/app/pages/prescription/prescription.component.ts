import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription.component.html',
  styleUrl: './prescription.component.css'
})
export class PrescriptionComponent {
  currentStep = 1;
  uploadedFile: File | null = null;
  
  prescriptionData = {
    patientName: '',
    prescriptionNumber: '',
    notes: '',
    deliveryMethod: 'standard'
  };

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
      this.currentStep = 2;
    }
  }

  removeFile(): void {
    this.uploadedFile = null;
    this.currentStep = 1;
  }

  submitPrescription(): void {
    console.log('Submit prescription', this.prescriptionData, this.uploadedFile);
    // Implement prescription submission logic
    this.currentStep = 3;
  }
}
