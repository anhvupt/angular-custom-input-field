import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  forwardRef,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
  template: '',
})
export abstract class CustomFormControlBase implements ControlValueAccessor {
  protected _value: any;
  onChange: (_: any) => {};
  onTouched: (_: any) => {};

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => {}) {
    this.onTouched = fn;
  }
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
  selector: '[app-form-field]',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent extends CustomFormControlBase {
  @Input() label:
    | string
    | { value: string; markAsRequired?: boolean; hidden?: boolean } = '';

  @Input() type: 'checkbox' | 'text' | 'number' | 'textarea' = 'text';
  @Input() inputTemplate: TemplateRef<any>;
  get value(): any {
    return this._value;
  }

  getLabel() {
    return typeof this.label === 'string' ? this.label : this.label.value;
  }
}
