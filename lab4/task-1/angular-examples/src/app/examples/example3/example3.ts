import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: ` Username: {{ username }} `,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-example3',
  standalone: true,
  imports: [User],
  template: `
    <section>
      <app-user></app-user>
    </section>
  `,
})
export class Example3Component {}
