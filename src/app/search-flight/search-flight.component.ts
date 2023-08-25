import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { destination } from '../data';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  destinations = destination;

  flightSearchForm: FormGroup = new FormGroup({});
 
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.flightSearchForm = this.formBuilder.group({
      flightType: ['One-way'],
      from: [''],
      to: [''],
      departureDate: [''],
      returnDate: ['']
    });
    
  }

  shouldDisableReturnDate(): boolean {
    return this.flightSearchForm?.get('flightType')?.value === 'One-way';
  }
  
  setFlightType(type: string) {
    if (this.flightSearchForm) {
      this.flightSearchForm.get('flightType')?.setValue(type);
    }
  }


  onSubmit() {
    // Implement your form submission logic here
    // this.router.navigate(['/Search_flight']);
    this.router.navigate(['/Search_flight'], { queryParams: this.flightSearchForm.value });
  }
}