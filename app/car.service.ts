import { Injectable } from '@angular/core';
import { Car, CarItem } from './car.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarService {
  private cars: Car[] = [
    new CarItem('Toyota', 'Corolla', 2020, 'assets/toyota-corolla.jpg'),
    new CarItem('Honda', 'Civic', 2019, 'assets/honda-civic.jpg'),
    new CarItem('Ford', 'Mustang', 2021, 'assets/ford-mustang.jpg')
  ];

  private selectedCarsSubject = new BehaviorSubject<Car[]>([]);
  selectedCars$ = this.selectedCarsSubject.asObservable();

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  selectCar(car: Car) {
    const current = this.selectedCarsSubject.getValue();
    if (!current.find(c => c.brand === car.brand && c.model === car.model)) {
      this.selectedCarsSubject.next([...current, car]);
    }
  }
}