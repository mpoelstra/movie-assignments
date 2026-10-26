Assignment 12: Template-driven form validation
==============================================

> ## Add validation rules and error messages to the template-driven form

**Links**:
- [Form Validation Guide](https://angular.dev/guide/forms/form-validation)
- [Template-driven Validation](https://angular.dev/guide/forms/form-validation#validating-input-in-template-driven-forms)
- [NgModel Directive](https://angular.dev/api/forms/NgModel)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
- Add HTML validation attributes to the input fields:
  - Add `required` and `minlength="4"` to the name input.
  - Add `required` to the genre input.
  - Make sure the rating input uses `type="number"`, then add `required`, `min="0"`, and `max="10"`.
> Angular's built-in `min` and `max` validators apply to numeric inputs. When the rating input uses `type="text"`, these attributes do not produce `min` or `max` validation errors.

- Access each control directly through `movieForm.controls` using the `name` attributes added in assignment 11.
  - Hint: Use `movieForm.controls['name']`, `movieForm.controls['genre']`, and `movieForm.controls['rating']`.
> Angular registers each `ngModel` control in `movieForm.controls` under its `name` attribute, so additional template reference variables are not needed.

- Display `movieForm.valid` in the template and observe how its value changes while editing the form.
  - Hint: `Form valid: {{ movieForm.valid }}`

- Create error message spans below each input field using `@if` blocks:
  - Check for errors using the `errors` property: `movieForm.controls['name']?.errors?.['required']`
  - Also check if the field has been touched: `movieForm.controls['name']?.touched`
  - Display appropriate error messages for each validation rule.

- Prevent form submission when invalid:
  - Update the `onSaveClicked` function to accept a second parameter for form validity.
  - Check if the form is valid before processing; if not, return early or show an error.
  - Update the `(ngSubmit)` binding to pass `movieForm.valid` as the second parameter.

- Optionally, disable the submit button when the form is invalid using property binding.

**Result**:
> We now have a template-driven form with validation rules and error messages that provide immediate feedback to users.
> In assignment 13, we'll explore reactive forms as an alternative approach.
