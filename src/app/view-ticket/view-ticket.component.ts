import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReservationService } from '../reservation.service';
import { destination } from '../data';

import { NameService } from '../name.service';

import{ jsPDF } from "jspdf";
import  html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  reservations: any[] = [];

  nameData: any;

  passenger: number = 0;
  adultCount: number = 0; // Variable to store adult count
  childrenCount: number = 0; // Variable to store children count

  constructor(private nameService: NameService,private reservationService: ReservationService,private router: Router){
    
  }

  ngOnInit() {

    this.nameData = this.nameService.getFormData();
console.log(this.nameData);
    this.reservations = this.reservationService.reservation;

    // Access adult and children values and save to variables
    this.adultCount = this.reservations.reduce((total, reservation) => total + reservation.adult, 0);
    this.childrenCount = this.reservations.reduce((total, reservation) => total + reservation.children, 0);
    this.passenger = this.adultCount + this.childrenCount;


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

  public convertToPDF(){
    html2canvas(document.body).then(canvas => {

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p','mm','a4');
      var width = pdf.internal.pageSize.getWidth();
      var height =canvas.height * width/canvas.width;
      pdf.addImage(contentDataURL, 'PNG',0,0,width,height)
      pdf.save('Plane_ticket.pdf');
    });
  }

  getCurrentDate(): string {
    const today = new Date();
    today.setDate(today.getDate()); // Add one day
    return today.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
  }

}
