import { Component } from '@angular/core';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  template: `
    <h2>Declarative Lazy Loading</h2>

    @defer {
    <app-flights />
    <app-flight-details />
    } @loading {
      <p>Loading...</p>
    } @error {
      <p>Erro happened!</p>
    }
  `,
  imports: [FlightsComponent, FlightDetailsComponent],
})
export class Defer {}
