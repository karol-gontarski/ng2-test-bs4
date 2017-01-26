import { Component, OnInit } from '@angular/core';
import { GoogleGeocodingService } from '../google-geocoding.service'
@Component({
  selector: 'app-jak-to-dziala',
  templateUrl: './jak-to-dziala.component.html',
  styleUrls: ['./jak-to-dziala.component.css'],
  providers: [GoogleGeocodingService]
})
export class JakToDzialaComponent implements OnInit {
  address: string;
  lat: number;
  lng: number;

  
  constructor(private geocode : GoogleGeocodingService) { 
    this.address = 'Al. Niepodległości 75/35 Warszawa';
    this.lat = 52.678418;
    this.lng = 15.809007;
  }

  ngOnInit() {
    this.geocode.geocode(this.address);
  }

}
