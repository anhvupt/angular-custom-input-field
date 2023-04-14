import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  standalone: true,
  imports: [FormsModule, FormFieldComponent],
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
})
export class CourseEditPageComponent implements OnInit {
  a = '';
  constructor() {}

  ngOnInit() {}
}
