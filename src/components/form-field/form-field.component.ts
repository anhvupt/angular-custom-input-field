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
  selector: '[app-form-field]',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements ControlValueAccessor {
  private _value: any;
  private onChange: (_: any) => {};
  private onTouched: () => {};

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  @Input() label:
    | string
    | { value: string; markAsRequired?: true; hidden?: true } = '';

  @Input() type: 'checkbox' | 'text' | 'number' | 'textarea' = 'text';
  @ContentChild('appFieldControl', { static: false })
  inputTemplate: TemplateRef<any>;

  getLabel() {
    return typeof this.label === 'string' ? this.label : this.label.value;
  }

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }
}
