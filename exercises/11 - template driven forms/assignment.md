Assignment 11: Template-driven forms
==============================================

> ## Extend the movie detail component with a template-driven form to capture and submit user input

**Links**:
- [Angular Forms Guide](https://angular.io/guide/forms-overview)
- [Template-driven Forms](https://angular.io/guide/forms)
- [NgForm Directive](https://angular.io/api/forms/NgForm)
- [FormsModule](https://angular.io/api/forms/FormsModule)
- [Template Reference Variables](https://angular.io/guide/template-reference-variables)

**Steps**:
- Verify that `FormsModule` is imported in the movie-detail component's imports array (it should already be there from assignment 09).
- Encapsulate the input fields and button in the movie detail component template with a `<form>` element (add `novalidate` attribute).
- Add a `name` attribute to all input fields with values matching their purpose.
> Angular requires the `name` attribute on form inputs to track them properly in template-driven forms.

- Add a template reference variable `movieForm` to the `<form>` element and assign it the `ngForm` directive.
  - Hint: `#movieForm="ngForm"`
> You can now access the form object that Angular creates via the `movieForm` variable.

- Display the form value below the form using the json pipe to see the form state.

- Remove the two-way binding `[()]` from the `ngModel` directives, keeping only one-way binding `[ngModel]` to display values from the movie signal.
> Notice that when you change inputs, the interpolated values no longer update automatically.

- Change the save button's type to `submit` and remove the `(click)` event binding.
- Add an `(ngSubmit)` event binding to the `<form>` element that calls `onSaveClicked(movieForm.value)`.
- Update the `onSaveClicked` function signature to accept a `value` parameter of type `any`.
- Inside `onSaveClicked`, create a new Movie object by combining the form values with the movie id and emit it.

**Extra**:
- Add a template reference variable to the genre input for better control.
- Add a Reset button that calls `resetForm()` on the form to restore original values.

**Result**:
> We now use NgForm to capture input changes without directly modifying the model. The data is only written to the model on submit.
> Next, we'll add validation to this form in assignment 12.
