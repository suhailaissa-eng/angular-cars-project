import { Injectable } from '@angular/core';
import { CarItem, Car } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  private cars: CarItem[] = [
    new CarItem('Toyota', 'Corolla', 2020, 'assets/toyota.jpg'),
    new CarItem('Honda', 'Civic', 2019, 'assets/honda.jpg'),
    new CarItem('BMW', 'X5', 2021, 'assets/bmw.jpg')
  ];

  getCars(): CarItem[] {
    return this.cars;
  }
}
