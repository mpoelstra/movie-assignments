Assignment 12: Template-driven form validation
==============================================

> ## Add validation rules and error messages to the template-driven form

**Links**:
- [Form Validation Guide](https://angular.io/guide/form-validation)
- [Template-driven Validation](https://angular.io/guide/forms#add-validation)
- [NgModel Directive](https://angular.io/api/forms/NgModel)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
- Add HTML validation attributes to the input fields:
  - Add `required` and `minlength="4"` to the name input.
  - Add `required` to the genre input.
  - Add `required`, `min="0"`, and `max="10"` to the rating input.

- Add template reference variables to each input that assign the ngModel.
  - Hint: `#nameInput="ngModel"` for the name field.
> Angular tracks validation state on the ngModel and exposes it through the template reference variable.

- Create error message spans below each input field using `@if` blocks:
  - Check for errors using the `errors` property: `nameInput.errors?.['required']`
  - Also check if the field has been touched: `nameInput.touched`
  - Display appropriate error messages for each validation rule.

- Prevent form submission when invalid:
  - Update the `onSaveClicked` function to accept a second parameter for form validity.
  - Check if the form is valid before processing; if not, return early or show an error.
  - Update the `(ngSubmit)` binding to pass `movieForm.valid` as the second parameter.

- Optionally, disable the submit button when the form is invalid using property binding.

**Result**:
> We now have a template-driven form with validation rules and error messages that provide immediate feedback to users.
> In assignment 13, we'll explore reactive forms as an alternative approach.
