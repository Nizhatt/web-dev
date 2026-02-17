import { Component, inject } from '@angular/core';
import { CarService } from '../example19/example19';

@Component({
  selector: 'app-example20',
  standalone: true,
  template: ` <p>Car Listing: {{ display }}</p> `,
})
export class Example20Component {
  carService = inject(CarService);

  display = this.carService.getCars().join(' ⭐ ');
}
