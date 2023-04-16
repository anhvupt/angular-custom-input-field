# angular-custom-input-field

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-d2fu8a)

This is a simple Angular application that demonstrates how to create a custom form control using the `ControlValueAccessor` interface. The custom form control is implemented as a component called `FormFieldComponent`, which is used to create a text input field that can be used in Angular forms.

## Installation

To install and run the application, follow these steps:

1. Clone or download the project from GitHub.

2. Open the project folder in your preferred code editor.

3. Install the required dependencies by running the following command in the terminal:

```npm install```

4. Start the development server by running the following command in the terminal:

```ng serve```

5. Open your web browser and navigate to `http://localhost:4200` to view the application.

## Usage

The `FormFieldComponent` component can be used as a custom form control in Angular forms. To use the component, import it into your Angular module and add it to your form's template.

Here's an example of how to use the `FormFieldComponent` component in an Angular form:

```html
<form [formGroup]="myForm" (submit)="onSubmit()">
<app-form-field formControlName="firstName" label="First Name"></app-form-field>
<app-form-field formControlName="lastName" label="Last Name"></app-form-field>
<button type="submit">Submit</button>
</form>
```

In this example, the app-form-field component is used to create two text input fields for the user's first name and last name. The formControlName attribute is used to bind the form controls to the corresponding fields in the form's FormGroup object.

Contributing
If you find a bug or would like to suggest a new feature, please open an issue or submit a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
