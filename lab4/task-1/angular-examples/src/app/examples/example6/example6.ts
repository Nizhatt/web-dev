import { Component } from '@angular/core';

@Component({
  selector: 'app-example6',
  standalone: true,
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class Example6Component {
  isEditable = true;
}

