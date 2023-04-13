import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Edit Course</h1>
    <router-outlet />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'courses/details', pathMatch: 'full' },
      {
        path: 'courses',
        children: [{ path: 'details', component: CourseEditPageComponent }],
      },
    ]),
  ],
});
