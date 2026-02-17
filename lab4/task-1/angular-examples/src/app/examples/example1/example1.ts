import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  template: ` Hello World! `,
  styles: [`
    :host {
      color: black;
    }
  `],
})
export class Example1Component {}
