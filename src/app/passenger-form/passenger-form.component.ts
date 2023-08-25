import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FindFlightService } from '../find-flight.service';

import { destination, travelClass } from '../data';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit{

  travelclasses = travelClass;

  destinations = destination;

  formData: any;

  displayedFlightForm!: FormGroup;

 

  constructor( private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private findFlightService:FindFlightService, private fb: FormBuilder ) { 

    }

  navigateToHome() {
    this.router.navigate(['/Home']); // Navigate to the home page
  }

  ngOnInit() {
    this.initForm();
    // Access form values from query params and do something with them
    this.route.queryParams.subscribe(params => {
      // Create a new FormGroup and assign values from query params
      this.displayedFlightForm.patchValue({
        flightType: params['flightType'] || 'One-way', // Default to empty string if no value
        flyingFrom: params['from'] || '',
        flyingTo: params['to'] || '',
        departureDate: params['departureDate'] || '',
        returnDate:params['returnDate'] || '',
        adult: params['adult'] || '',
        child: params['child'] || '',
        travelClass: params['travelClass'] || ''
      });
      

      this.formData = history.state.formData || {};

      this.displayedFlightForm.patchValue({
        // Define your form controls here based on your form structure
        flightType:this.formData.flightType || 'One-way',
        flyingFrom: this.formData.flyingFrom || '',
        flyingTo: this.formData.flyingTo || '',
        departureDate: this.formData.departureDate || '',
        returnDate: this.formData.returnDate || '',
        adult: this.formData.adult || '',
        child: this.formData.child || '',
        travelClass: this.formData.travelClass || '',
  
        // Add other form controls
      });
    });


  }

  initForm() {
    // Initialize the form structure
    this.displayedFlightForm = this.formBuilder.group({
      flightType: ['', Validators.required],
      flyingFrom: ['', Validators.required],
      flyingTo: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      adult: ['', Validators.required],
      child: ['', Validators.required],
      travelClass: ['', Validators.required]
    });

      // Subscribe to changes in the flightType control
  this.displayedFlightForm.get('flightType')?.valueChanges.subscribe(value => {
    if (value === 'One-way') {
      // Clear and disable the returnDate control
      this.displayedFlightForm.get('returnDate')?.clearValidators();
      this.displayedFlightForm.get('returnDate')?.disable();
    } else {
      // Enable the returnDate control and set Validators.required
      this.displayedFlightForm.get('returnDate')?.setValidators(Validators.required);
      this.displayedFlightForm.get('returnDate')?.enable();
    }
    // Update the validation state
    this.displayedFlightForm.get('returnDate')?.updateValueAndValidity();
  });
  }

  setFlightType(type: string) {
    if (this.displayedFlightForm) {
      this.displayedFlightForm.get('flightType')?.setValue(type);
    }
  }
  
  onFormSubmit() {

    if (this.displayedFlightForm.valid) {

      const formData = this.displayedFlightForm.value;
      this.findFlightService.setFormData(formData);

      this.router.navigate(['/Flight_available']);

    } else {
      this.displayedFlightForm.markAllAsTouched();

    }
    
   
  }

}
