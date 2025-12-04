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
- Encapsulate the input fields and button in the movie detail component template with a `<form>` element (add `novalidate` attribute to disable browser validation).
- Add a `name` attribute to all input fields with values matching their purpose: `name="name"`, `name="genre"`, `name="rating"`.
> Angular requires the `name` attribute on form inputs to track them properly in template-driven forms.
- Add a template reference variable `movieForm` to the `<form>` element and assign it the `ngForm` directive: `#movieForm="ngForm"`.
> You can now access the form object that Angular creates via the `movieForm` variable.
- Display the form value below the form using the json pipe to see the form state: `{{ movieForm.value | json }}`.

> Now we'll let NgForm handle the form state instead of directly binding to signals:
- Remove the two-way binding `[()]` from the `ngModel` directives, keeping only one-way binding `[ngModel]` to display values from the movie signal.
> Notice that when you change inputs, the interpolated values like `{{movie().name}}` no longer update automatically.
- Change the save button's type to `submit` and remove the `(click)` event binding.
- Add an `(ngSubmit)` event binding to the `<form>` element that calls `onSaveClicked(movieForm.value)`.
- Update the `onSaveClicked` function signature to accept a `value` parameter of type `any`.
> The form value will have properties matching your input field names (name, genre, rating), but won't include the id.
- Inside `onSaveClicked`, create a new Movie object by combining the form values with the movie id:
```typescript
const updatedMovie: Movie = {
  id: this.movie().id,
  name: value.name,
  genre: value.genre,
  rating: value.rating
};
this.save.emit(updatedMovie);
```

**Extra**:
> Add a reset button and improve the escape key handling:
- Add a template reference variable `#genreInput="ngModel"` to the genre input element.
- Update the escape key handler to use the form control: `(keyup.escape)="genreInput.control?.setValue('')"`.
- Add a Reset button with `type="button"` (to prevent form submission).
- Bind the Reset button's click event to a new `onResetClicked(movieForm)` method.
- Implement `onResetClicked(form: any): void` that calls `form.resetForm(this.movie())` to restore original values.

**Result**:
> We now use NgForm to capture input changes without directly modifying the model. The data is only written to the model on submit, providing better control over when changes are applied.
> Next, we'll add validation to this form in assignment 12.
