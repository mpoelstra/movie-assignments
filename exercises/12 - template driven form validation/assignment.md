Assignment 12: Template-driven form validation
==============================================

> ## Add validation rules and error messages to the template-driven form

**Links**:
- [Form Validation Guide](https://angular.io/guide/form-validation)
- [Template-driven Validation](https://angular.io/guide/forms#add-validation)
- [NgModel Directive](https://angular.io/api/forms/NgModel)
- [Validation Attributes](https://angular.io/api/forms/Validators)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
> Add HTML validation attributes to the input fields:
- Add `required` attribute to the name input element.
- Add `required minlength="4"` attributes to the name input element.
- Add a template reference variable `#nameInput="ngModel"` to the name input.
> Angular tracks validation state on the ngModel and exposes it through the template reference variable.
- Create a `<div>` element below the name input to display validation errors.
- Inside the div, add a `<span>` element with an `@if` directive that checks for the required error:
```html
@if (nameInput.errors?.['required'] && nameInput.touched) {
  <span class="error">Name is required</span>
}
```
> The `touched` property ensures errors only show after the user has interacted with the field.
- Add another `@if` block in the same div for the minlength error:
```html
@if (nameInput.errors?.['minlength'] && nameInput.touched) {
  <span class="error">Name must be at least 4 characters</span>
}
```

- Repeat the validation setup for the genre field:
  - Add `required` attribute
  - Add template reference variable `#genreInput="ngModel"`
  - Add error message span with `@if` directive

- For the rating field, add validation:
  - Add `required min="0" max="10"` attributes
  - Add template reference variable `#ratingInput="ngModel"`
  - Add error messages for required, min, and max validation

> Prevent form submission when the form is invalid:
- Update the `onSaveClicked` function to accept a second parameter for form validity:
```typescript
onSaveClicked(value: any, isValid: boolean): void {
  if (!isValid) {
    console.error('Form is invalid');
    return;
  }
  // ... rest of the code
}
```
- Update the `(ngSubmit)` binding to pass the form's validity: `(ngSubmit)="onSaveClicked(movieForm.value, movieForm.valid)"`

- Optionally, disable the submit button when the form is invalid using property binding:
```html
<button type="submit" [disabled]="!movieForm.valid">Save..</button>
```

**Styling (Optional)**:
> Add CSS classes to improve the visual feedback:
- Angular automatically adds classes to form elements based on their state:
  - `.ng-valid` / `.ng-invalid`: validation state
  - `.ng-touched` / `.ng-untouched`: interaction state
  - `.ng-dirty` / `.ng-pristine`: modified state

- Add styles to your component's SCSS file:
```scss
input.ng-invalid.ng-touched {
  border-color: red;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
```

**Result**:
> We now have a template-driven form with validation rules and error messages that provide immediate feedback to users. The form prevents submission when invalid, ensuring data integrity.
> In assignment 13, we'll explore reactive forms as an alternative approach with more programmatic control.
