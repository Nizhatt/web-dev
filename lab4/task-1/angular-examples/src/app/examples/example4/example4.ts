import { Component } from '@angular/core';

@Component({
  selector: 'app-example4',
  standalone: true,
  template: `  
    @if (isServerRunning) {
      <p>Welcome back, Friend!</p>
    } @else {
      <p>hello</p>
    }
  `,
})
export class Example4Component {
  isServerRunning = false;
}
