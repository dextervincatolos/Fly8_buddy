import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FindFlightService } from '../find-flight.service';

import { airlineIdentification } from '../data';
import { destination } from '../data';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent {
  airlines = airlineIdentification;

  formData: any;
  flyingFromCity: any; // To store the flyingFrom city details
  flyingToCity: any;
  departureFlight: any[] = []; // To store the filtered flights
  returningFlight: any[] = []; // To store the filtered flights


  constructor(private findFlightService:FindFlightService,private router: Router){}

 
  
  ngOnInit(){
  //  const formData = this.findFlightService.getFormData();
    this.formData = this.findFlightService.getFormData();


     // Find the flyingFrom city details
     this.flyingFromCity = destination.find(city => city.cityID === this.formData.flyingFrom);
     this.flyingToCity = destination.find(city => city.cityID === this.formData.flyingTo);

    // Filter flights based on departure and return dates
    const departureDate = this.formData.departureDate;
    const returnDate = this.formData.returnDate;

    this.departureFlight = airlineIdentification.filter(
      departure => departure.flight_date == departureDate
    );

    this.returningFlight = airlineIdentification.filter(
      returning => returning.flight_date == returnDate
    );

  // Now you can use formData in this component without exposing it in the URL
  }

  editFlight() {
    // You can navigate back to the previous route
    this.router.navigate(['Search_flight'],
    { state: { formData: this.formData} }); 
  }


}
