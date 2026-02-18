import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrls: ['./car.css'],
  standalone: true
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {

  @Input() car!: Car; 
  @Output() selected = new EventEmitter<Car>(); 

  clickCount: number = 0;
  isButtonDisabled: boolean = false;
  previousBrand: string = '';

  constructor() {
    console.log('Constructor: CarComponent created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes['car']?.currentValue);
  }

  ngOnInit() {
    console.log('ngOnInit: CarComponent initialized with', `${this.car.brand} ${this.car.model} (${this.car.year})`);
  }

  ngDoCheck() {
    if (this.car.brand !== this.previousBrand) {
      console.log('ngDoCheck: Brand changed to', this.car.brand);
      this.previousBrand = this.car.brand;
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized for', `${this.car.brand} ${this.car.model} (${this.car.year})`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: CarComponent destroyed for', `${this.car.brand} ${this.car.model} (${this.car.year})`);
  }

  onSelectCar() {
    this.clickCount++;
    this.car.clicks = this.clickCount;

    if (this.clickCount >= 5) {
      this.isButtonDisabled = true;
      console.warn(`${this.car.brand} ${this.car.model} reached maximum clicks`);
    }

    this.selected.emit(this.car); 

    
    setTimeout(() => {
      if (this.clickCount < 5) this.isButtonDisabled = false;
    }, 10000);
  }
}
