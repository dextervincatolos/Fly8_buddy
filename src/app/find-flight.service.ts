import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindFlightService {


  private formData: any; // Store your form data here

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
  
  constructor() { }
}
