import { Component } from "@angular/core";

@Component({
  selector: 'my-own',
  template: `
    <h1>{{text}}</h1>
    `,

})

export class OwnComponent {
  text = 'Testing my own components...';
}