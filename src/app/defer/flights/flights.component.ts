import { Component } from '@angular/core';
import { FlightItemComponent } from '../flight-item/flight-item.component';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [FlightItemComponent],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent {

}
