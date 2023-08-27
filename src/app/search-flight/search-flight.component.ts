import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlightService } from '../book-flight.service';
import { destination } from '../data';



@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  destinations = destination;

  flightSearchForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private bookFlightService: BookFlightService) { }

  ngOnInit() {
    this.flightSearchForm = this.formBuilder.group({
      flightType: ['One-way'],
      from: [''],
      to: [''],
      departureDate: [''],
      returnDate: ['']
    });

    // Disable returnDate control on initial load
  this.flightSearchForm.get('returnDate')?.disable();

          // Subscribe to changes in the flightType control
  this.flightSearchForm.get('flightType')?.valueChanges.subscribe(value => {
    
    if (value === 'One-way') {
      // Clear and disable the returnDate control
      this.flightSearchForm.get('returnDate')?.disable();
    } else {
      // Enable the returnDate control and set Validators.required
      this.flightSearchForm.get('returnDate')?.enable();
    }
    // Update the validation state
    this.flightSearchForm.get('returnDate')?.updateValueAndValidity();
  });
    
  }

  // shouldDisableReturnDate(): boolean {
  //   return this.flightSearchForm?.get('flightType')?.value === 'One-way';
  // }



  setFlightType(type: string) {
    if (this.flightSearchForm) {
      this.flightSearchForm.get('flightType')?.setValue(type);
    }
  }

  getCurrentDate(): string {
    const today = new Date();
    today.setDate(today.getDate() + 2); // Add one day
    return today.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
  }



  onSubmit() {
   const searchFlight= this.flightSearchForm.value;
   this.bookFlightService.setData(searchFlight);
   this.router.navigate(['/Search_flight']);
  }
}