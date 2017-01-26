import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GoogleGeocodingService {
  url:string;
  apikey:string;
  address:string;
  constructor(private http:Http) {
    this.apikey = 'AIzaSyDJkClvlZDsfU7BKGCVCl6B3GOnbhqK38U'
    this.url = 'https://maps.googleapis.com/maps/api/geocode/json';
  }
  geocode( address:string){
    this.address = address; 
    return this.http.get(this.url+'?address='+this.address+'&key='+this.apikey)
    .subscribe(
    (data)=> console.log(data)
    );
    
  }

}
