import { Component } from '@angular/core';
import { ReversePipe } from './reverse-pipe';

@Component({
  selector: 'app-example23',
  standalone: true,
  imports: [ReversePipe],
  template: ` Reverse Machine: {{ word | reverse }} `,
})
export class Example23Component {
  word = 'You are a champion';
}
