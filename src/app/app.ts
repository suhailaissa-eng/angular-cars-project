import { Component } from '@angular/core';
import { CarComponent } from './car/car';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarComponent],       
  templateUrl: './app.html',       
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Car App';
}
