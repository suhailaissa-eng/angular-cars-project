import { Component, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-stats',
  template: `
    <h2>Car Statistics</h2>
    <ul>
      <li *ngFor="let car of cars">
        {{ car.brand }} {{ car.model }} - {{ car.clicks || 0 }} clicks
      </li>
    </ul>
  `,
  standalone: true
})
export class CarStatsComponent {
  @Input() cars: Car[] = [];
}
