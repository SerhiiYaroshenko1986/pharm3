import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 48.90686948072458, lng: 24.71457639419568 }; // Centered on Ivano-Frankivsk, Ukraine
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral = this.center;
}
