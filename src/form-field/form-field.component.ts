import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: '[appFormField]',
  template: `
    <label>form field label</label>
    <input type="text" />
    <p>error</p>
  `,
})
export class FormFieldComponent {
  constructor() {}
}
