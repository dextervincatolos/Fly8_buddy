import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {


  private formData: any;

  constructor() {}

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }


}
