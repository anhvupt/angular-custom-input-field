import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartialKeyOf } from '../../models/common.model';
import { Course } from '../../models/course.model';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormFieldComponent, NgFor],
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
})
export class CourseEditPageComponent implements OnInit {
  private initialForm: PartialKeyOf<Course, any> = {
    name: '',
    description: '',
    isTopRated: true,
    length: '5h30m',
    type: 'angular',
  };

  form = inject(FormBuilder).group(this.initialForm);
  courseTypes = ['fundamental', 'angular', '.net'];

  ngOnInit() {
    this.form.valueChanges.subscribe(console.log);
  }
}
