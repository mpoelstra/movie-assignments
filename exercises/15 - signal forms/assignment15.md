Assignment 15: Signal Forms
==============================================

> ## Create a Signal Form to edit and submit movie data with a signal as the source of truth

**Links**:
- [Signal Forms Overview](https://angular.dev/guide/forms/signals/overview)
- [Signal Forms Essentials](https://angular.dev/essentials/signal-forms)
- [Form Models](https://angular.dev/guide/forms/signals/models)
- [Field State Management](https://angular.dev/guide/forms/signals/field-state-management)

**Before You Start - Restore the Assignment 10 Backup**:
> Assignment 15 explores Signal Forms as an alternative to the template-driven and reactive forms from assignments 11 through 14. Start again from the movie-detail implementation completed in assignment 10.

- If you want to keep your completed assignment 14 version, first create a backup of the current `src/app/movies/movie-detail` folder outside `src`.
- Restore the backup of the assignment 10 `movie-detail` folder that you created before starting assignment 11.
- Make sure the restored folder is located at `src/app/movies/movie-detail`.
- Verify that the assignment 10 version is restored: it should use `FormsModule`, `ngModel`, and the existing save output.

**Steps**:
- Remove the `ngModel` directives from the template and remove `FormsModule` from the movie-detail component's imports array.

- Import `signal` from `@angular/core`.
- Import `form` and `FormField` from `@angular/forms/signals`.
- Add `FormField` to the component's imports array.
> Signal Forms are included in Angular Forms, but their APIs are imported from `@angular/forms/signals`. `FormField` is a directive used by the template; `form` is a function used in the component class.

- Create a writable signal that contains the complete editable movie model.
  - Give the signal the `Movie` type and provide initial values for `id`, `name`, `genre`, and `rating`.
> Signal Forms build their field tree from the shape of the model. Initialize every property that should be part of the form. Keeping `id` in the model preserves it when saving, even though no input is displayed for it.

- Create a `movieForm` field tree by passing the movie model signal to the `form()` function.
  - Hint: `form(this.movieModel, ...)`
> The field tree mirrors the model, so fields are available through properties such as `movieForm.name`, `movieForm.genre`, and `movieForm.rating`.

- Synchronize the required `movie` input with the writable form model when the selected movie changes.
  - Use `ngOnChanges` or an `effect`, as explored in assignment 13.
  - Replace the complete model value with a copy of the selected movie.
  - Hint: Use the signal's `set()` method.

- Connect the field tree to the template:
  - Bind each input to its corresponding field with the `[formField]` directive.
  - Make sure the rating input uses `type="number"`.
> `[formField]` keeps the input, its field state, and the writable model signal synchronized automatically. You do not need `ngModel`, `formControlName`, or manual input event handlers.

- Handle the form submission:
  - Bind the form's native submit event to the existing save method: `(submit)="onSaveClicked($event)"`.
  - Let the method receive an `Event` and call `preventDefault()` to stop the browser from reloading the page.
  - Emit the current value of the movie model signal through the existing `save` output.
  - Make sure the save button uses `type="submit"`.
> `[formField]` keeps the model up to date while the user types. Submitting is still a normal HTML form event here, so the handler prevents the browser's default behavior and reads the completed movie directly from the model signal.

- Test the form:
  - Select a movie and verify that its current values appear in the inputs.
  - Edit the fields and verify that the movie model signal updates.
  - Save the movie and verify that the existing service updates the movie, including its original `id`.
  - Select another movie and verify that the form displays the newly selected values.

**Extra**:
- Display the form-level `dirty()` and `touched()` signals in the template.
- Compare how Signal Forms, reactive forms, and template-driven forms represent form values and field state.

**Result**:
> The movie detail component now uses a typed signal as its form model. `FormField` synchronizes the inputs with that model, and the submit handler emits the current model through the existing save flow.
> Next, we'll add validation to the Signal Form in assignment 16.
