import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'Search_flight', component: PassengerFormComponent},
  {path:'Flight_available', component: SearchResultComponent},
  {path:'Passenger_info', component: PassengerInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
