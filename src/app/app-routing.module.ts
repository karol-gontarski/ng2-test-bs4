import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZglosAwarieComponent } from './zglos-awarie/zglos-awarie.component';
import { JakToDzialaComponent } from './jak-to-dziala/jak-to-dziala.component';
import { KontaktComponent } from './kontakt/kontakt.component';


const routes: Routes = [
  {
    path: '',
    component: ZglosAwarieComponent,
    children: []
  },

  {
    path: 'jak-to-dziala',
    component: JakToDzialaComponent,
    children: []
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
