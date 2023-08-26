import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerInfoService } from '../passenger-info.service';
import { ReservationService } from '../reservation.service';
import { destination } from '../data';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent{

 

  reservations: any[] = [];

  constructor(private passengerInfoService: PassengerInfoService, private reservationService: ReservationService){
    
  }

  ngOnInit() {

     

    //const selectedFlight = this.passengerInfoService.passengerInfo;
    this.reservations = this.reservationService.reservation;

    this.reservations = this.reservationService.reservation.map(reservation => {
      return {
        ...reservation,
        cityCodeFrom: this.getCityCode(reservation.cityCodeFrom),
        cityCodeTo: this.getCityCode(reservation.cityCodeTo)
      };
    });

   
    
  }


  getCityCode(cityID: string): string {
    const destinationItem = destination.find(dest => dest.cityID === cityID);
    return destinationItem ? destinationItem.city_code : '';
  }



}



