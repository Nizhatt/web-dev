import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  standalone: true,
  template: ` Hello {{ city }} , {{1 + 1}}`,
})
export class Example2Component {
  city = 'San Francisco';
}
