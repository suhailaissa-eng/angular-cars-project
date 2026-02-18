import { Component } from '@angular/core';
import { CarComponent } from './car/car';
import { CarStatsComponent } from './car/car-stats';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CarComponent, CarStatsComponent]
})
export class AppComponent {
  cars: Car[] = [];
  selectedCars: Car[] = [];
  searchTerm: string = ''; 

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }

  onCarSelected(car: Car) {
    if (!this.selectedCars.find(c => c.brand === car.brand && c.model === car.model)) {
      this.selectedCars.push(car);
    }
  }
}
