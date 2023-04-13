import { FormFieldComponent } from './../../app/form-field/form-field.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [FormFieldComponent, CommonModule],
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css'],
})
export class CourseEditPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
