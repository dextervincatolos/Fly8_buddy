import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    NavbarComponent,
    FooterComponent,
    OtherInfoComponent,
    PassengerFormComponent,
    SelectFlightComponent,
    PassengerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
