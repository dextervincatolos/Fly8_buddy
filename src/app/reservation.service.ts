import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservation: any[] = [];

  addReservation(formData: any, flightData: any) {
    const id = this.reservation.length+1;

    let travelClassValue = '';

    if (formData.travelClass === 'Economy') {
      travelClassValue = flightData.economy;
    } else if (formData.travelClass === 'Premium Economy') {
      travelClassValue = flightData.premium_economy;
    } else if (formData.travelClass === 'Business') {
      travelClassValue = flightData.business;
    } else if (formData.travelClass === 'First Class') {
      travelClassValue = flightData.first_class;
    } else {
      // Handle other cases if needed
    }

    this.reservation.push({
      reservationID: id, // You can generate an ID here
      IATA_code: flightData.IATA_code,
      airlineName:flightData.name,
      cityCodeFrom: formData.flyingFrom,
      cityCodeTo: formData.flyingTo,
      basePrice: parseFloat(flightData.base_price),
      travelClassprice:  parseFloat(travelClassValue),
      travelClass:formData.travelClass,
      flightType: formData.flightType,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      adult:formData.adult,
      children: formData.child
    });

    console.log('Updated reservation array:', this.reservation);
  }
}

