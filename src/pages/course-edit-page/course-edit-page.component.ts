import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../components/form-field/form-field.component';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormFieldComponent],
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
})
export class CourseEditPageComponent implements OnInit {
  form = inject(FormBuilder).group({
    name: '',
  });

  ngOnInit() {
    this.form.valueChanges.subscribe(console.log);
  }
}
