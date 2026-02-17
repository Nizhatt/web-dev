import { Component } from '@angular/core';
import { Example2Component } from './examples/example2/example2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Example2Component],
  template: `<app-example2></app-example2>`,
})
export class App {}

