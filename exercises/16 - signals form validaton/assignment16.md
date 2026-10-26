Assignment 16: Signal Form validation
==============================================

> ## Add validation rules and error messages to the Signal Form

**Links**:
- [Signal Forms Validation](https://angular.dev/guide/forms/signals/validation)
- [Field State Management](https://angular.dev/guide/forms/signals/field-state-management)
- [Form Submission](https://angular.dev/guide/forms/signals/form-submission)
- [FormRoot](https://angular.dev/api/forms/signals/FormRoot)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
- Continue with the Signal Form created in assignment 15.

- Import `required`, `minLength`, `min`, and `max` from `@angular/forms/signals`.

- Add a validation schema as the second argument of `form()`.
  - Apply `required` and `minLength` to the name path.
  - Apply `required` to the genre path.
  - Apply `required`, `min`, and `max` to the rating path.
  - Add a clear error message to each rule.
> The schema path mirrors the form model, so validators can be connected to paths such as `schemaPath.name`.

- Add `novalidate` to the `<form>` element so Angular handles the validation feedback.
> Without `novalidate`, the browser can block the submit event and show its own validation messages. We want `onSaveClicked` and the Signal Forms field state to handle this instead.

- Display validation errors below each input:
  - Show errors only when the field is touched and invalid.
  - Use the field's `errors()` signal to display the configured messages.
  - Hint: `movieForm.name().touched()` and `movieForm.name().invalid()`.

- Prevent invalid movies from being saved in `onSaveClicked`:
  - Keep `event.preventDefault()` at the start.
  - Mark the form as touched with `movieForm().markAsTouched()`.
  - Return early when `movieForm().invalid()` is `true`.

- Display `movieForm().valid()` in the template.
> `valid()`, `invalid()`, `touched()`, and `errors()` are signals. The template updates automatically when a field value or validation state changes.

- Test the validation:
  - Try an empty name or genre, a short name, and ratings outside the allowed range.
  - Verify that an invalid movie is not emitted or saved.

**Extra**:
- Add CSS classes based on `touched()` and `invalid()` to visually distinguish invalid fields.
- Use `errorSummary()` and `focusBoundControl()` to focus the first invalid field after submission.
- Replace the native submit handler with `FormRoot` and a `submission.action` configuration. Remove the manual submission tasks that `FormRoot` now handles and compare both approaches.

**Result**:
> The Signal Form now validates movie data through a typed schema. Field-state signals provide reactive error messages, while the existing submit handler prevents invalid movies from being saved without requiring `FormRoot`.
> Next, we'll implement routing in assignment 17.
