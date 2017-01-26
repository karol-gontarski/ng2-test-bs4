import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AgmCoreModule,GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

import { AlertModule,CollapseModule } from 'ng2-bootstrap'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { JakToDzialaComponent } from './jak-to-dziala/jak-to-dziala.component';
import { ZglosAwarieComponent } from './zglos-awarie/zglos-awarie.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KontaktComponent,
    JakToDzialaComponent,
    ZglosAwarieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJkClvlZDsfU7BKGCVCl6B3GOnbhqK38U'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
