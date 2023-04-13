import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormFieldComponent } from '../../form-field/form-field.component';

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
