import { Component } from '@angular/core';
import { airlineIdentification } from '../data';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent {
  airlines = airlineIdentification;
}
