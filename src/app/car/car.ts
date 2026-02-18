import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './car.html',
  styleUrls: ['./car.css']
})
export class CarComponent implements OnInit, OnDestroy {

  cars: Car[] = [];
  clickCount: number = 0;
  isButtonDisabled: boolean = false;

  constructor(private carService: CarService) {
    console.log("Constructor called");
  }

  ngOnInit() {
    console.log("Component initialized");
    this.cars = this.carService.getCars();
  }

  ngOnDestroy() {
    console.log("Component destroyed");
  }

  onCarClick() {
    this.clickCount++;
  }
}
