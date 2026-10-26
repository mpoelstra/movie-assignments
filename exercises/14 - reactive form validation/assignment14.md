Assignment 14: Reactive form validation
==============================================

> ## Add validation rules and error messages to the reactive form

**Links**:
- [Reactive Form Validation](https://angular.io/guide/form-validation#reactive-form-validation)
- [Validators Class](https://angular.io/api/forms/Validators)
- [FormControl Validation](https://angular.io/guide/form-validation#validating-input-in-reactive-forms)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
- Import `Validators` from `@angular/forms`.
- Update the FormControl definitions to include validators as the second parameter:
  - Name: `[Validators.required, Validators.minLength(4)]`
  - Genre: `[Validators.required]`
  - Rating: `[Validators.required, Validators.min(0), Validators.max(10)]`

- Display validation errors in the template:
  - Access form controls using `movieForm.controls['controlName']`.
  - Add error message divs below each input field using `@if` directives.
  - Check for specific errors: `movieForm.controls['name'].errors?.['required']`
  - Also check if the control has been touched.

- Prevent invalid form submission:
  - Update `onSaveClicked` to check `movieForm.valid` before processing.
  - If invalid, mark all fields as touched using `movieForm.markAllAsTouched()` to show all errors.
  - Return early if the form is invalid.

- Disable the submit button when form is invalid:
  - Use property binding: `[disabled]="!movieForm.valid"`

**Optional - Create getter methods**:
> Add getter methods for form controls to simplify template access and make code more readable.

**Optional - Subscribe to form changes**:
> Reactive forms allow you to observe form value changes using the `valueChanges` observable.

**Result**:
> We now have a reactive form with comprehensive validation. The programmatic approach provides more control and testability compared to template-driven forms.
> Next, we'll implement routing in assignment 15.
