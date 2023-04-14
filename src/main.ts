import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
  styleUrls: ['./global_styles.scss'],
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
      { path: 'test', component: FormFieldComponent },
    ]),
  ],
});
