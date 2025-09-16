import { Injectable, signal, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationDialogComponent } from '../components/location-popup/location-popup.component';

export interface City {
  id: number;
  name: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private dialog = inject(MatDialog);
  private _selectedCity = signal<City | null>(null);

  selectedCity = this._selectedCity.asReadonly();

  // Your existing cities list
  private cities: City[] = [
    { id: 1, name: 'Київ', region: 'Київська область' },
    { id: 2, name: 'Івано-Франківськ', region: 'Івано-Франківська область' },
    { id: 3, name: 'Луцьк', region: 'Волинська область' }
  ];

  constructor() {
    // Load saved city from localStorage
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
      try {
        const city = JSON.parse(savedCity);
        this._selectedCity.set(city);
      } catch (e) {
        this._selectedCity.set(this.cities[0]); // Default to Київ
      }
    } else {
      this._selectedCity.set(this.cities[0]); // Default to Київ
    }
  }

  getCities(): City[] {
    return this.cities;
  }

  selectCity(city: City): void {
    this._selectedCity.set(city);
    localStorage.setItem('selectedCity', JSON.stringify(city));
  }

  openLocationDialog() {
    const dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '450px',
      maxHeight: '650px',
      panelClass: 'location-dialog',
      data: {
        cities: this.cities,
        selectedCity: this._selectedCity()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectCity(result);
      }
    });
  }
}
