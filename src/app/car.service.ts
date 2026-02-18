import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2022, image: 'https://via.placeholder.com/150' },
    { id: 2, brand: 'BMW', model: 'X5', year: 2023, image: 'https://via.placeholder.com/150' },
    { id: 3, brand: 'Audi', model: 'A6', year: 2021, image: 'https://via.placeholder.com/150' }
  ];

  getCars(): Car[] {
    return this.cars;
  }
}
