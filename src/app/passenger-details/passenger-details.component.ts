import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerInfoService } from '../passenger-info.service';
import { ReservationService } from '../reservation.service';
import { destination } from '../data';
import { NameService } from '../name.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent{

  passengerForm!: FormGroup;  

  reservations: any[] = [];

  passenger: number = 0;
  adultCount: number = 0; // Variable to store adult count
  childrenCount: number = 0; // Variable to store children count

  constructor(private fb: FormBuilder, private passengerInfoService: PassengerInfoService, private nameService: NameService,private reservationService: ReservationService, private formBuilder: FormBuilder,private router: Router){
    this.passengerForm = this.formBuilder.group({
      names: this.formBuilder.array([this.formBuilder.control('', [Validators.required])])
    });
  }

  ngOnInit() {

    this.reservations = this.reservationService.reservation;

     // Access adult and children values and save to variables
     this.adultCount = this.reservations.reduce((total, reservation) => total + reservation.adult, 0);
     this.childrenCount = this.reservations.reduce((total, reservation) => total + reservation.children, 0);
     this.passenger = this.adultCount + this.childrenCount;

     this.passengerForm = this.fb.group({
      passenger: this.passenger = this.adultCount + this.childrenCount,
      names: this.fb.array([])
    });

    this.updateNameInputs(); // Initialize name inputs
 
    this.reservations = this.reservationService.reservation.map(reservation => {
      return {
        ...reservation,
        cityCodeFrom: this.getCityCode(reservation.cityCodeFrom),
        cityCodeTo: this.getCityCode(reservation.cityCodeTo)
      };
    });
    

   
   
  }
  get nameInputs() {
    return this.passengerForm.get('names') as FormArray;
  }

  updateNameInputs() {
    const passenger = this.passengerForm.get('passenger')?.value || 0;
    const nameInputs = this.nameInputs;

    while (nameInputs.length !== passenger) {
      if (nameInputs.length < passenger) {
        nameInputs.push(this.fb.control(''));
      } else {
        nameInputs.removeAt(nameInputs.length - 1);
      }
    }
  }

 

  getCityCode(cityID: string): string {
    const destinationItem = destination.find(dest => dest.cityID === cityID);
    return destinationItem ? destinationItem.city_code : '';
  }


  onSubmit() {

    const passengerFormData = this.passengerForm.value;
    this.nameService.setFormData(passengerFormData);

  //   if (this.passengerForm.valid) {

  //     const formData = this.passengerForm.value;
  //    // this.passengerForm.setFormData(formData);
  //     console.log(this.passengerForm.value.names);

       this.router.navigate(['/View_ticket']);

  //   } else {
  //     this.passengerForm.markAllAsTouched();

  //   }
  //   // Handle form submission
  //   //console.log(this.passengerForm.value.names);
   }

}



