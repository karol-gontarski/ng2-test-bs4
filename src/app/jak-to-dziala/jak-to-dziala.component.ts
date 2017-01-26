import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jak-to-dziala',
  templateUrl: './jak-to-dziala.component.html',
  styleUrls: ['./jak-to-dziala.component.css']
})
export class JakToDzialaComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
