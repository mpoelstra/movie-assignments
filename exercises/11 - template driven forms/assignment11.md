Assignment 11: Template-driven forms
==============================================

> ## Extend the movie detail component with a template-driven form to capture and submit user input

**Links**:
- [Angular Forms Guide](https://angular.dev/guide/forms)
- [Template-driven Forms](https://angular.dev/guide/forms/template-driven-forms)
- [NgForm Directive](https://angular.dev/api/forms/NgForm)
- [FormsModule](https://angular.dev/api/forms/FormsModule)
- [Template Reference Variables](https://angular.dev/guide/templates/variables#template-reference-variables)

**Before You Start - Create a Backup**:
> Assignments 11 and 12 form the template-driven forms track. Assignment 13 starts a separate reactive forms track from the movie-detail implementation completed in assignment 10.

- Verify that assignment 10 works and create a backup of the entire `src/app/movies/movie-detail` folder. Place the backup outside the `src` folder, for example at `exercises/_backups/assignment10/movie-detail`.
> Keep the backup outside the `src` folder so Angular does not compile it. Continue working in the original `src/app/movies/movie-detail` folder.
> You will restore this backup before starting assignment 13. You can still complete assignment 12 directly after assignment 11.

**Steps**:
- Verify that `FormsModule` is imported in the movie-detail component's imports array (it should already be there from assignment 09).
- Encapsulate the input fields and button in the movie detail component template with a `<form>` element (add `novalidate` attribute).
- Add a `name` attribute to each input field. Its value must exactly match the corresponding property of the `Movie` object: `name`, `genre`, or `rating`.
> Angular uses each `name` attribute as the key in `movieForm.value`, so these names must match the `Movie` properties.

- Add a template reference variable `movieForm` to the `<form>` element and assign it the `ngForm` directive.
  - Hint: `#movieForm="ngForm"`
> You can now access the form object that Angular creates via the `movieForm` variable.

- Display the form value below the form using the json pipe to see the form state.
  - Hint: `{{ movieForm.value | json }}`

- Remove the two-way binding `[()]` from the `ngModel` directives, keeping only one-way binding `[ngModel]` to display values from the movie signal.
> Notice that when you change inputs, the interpolated values no longer update automatically.

- Change the save button's type to `submit` and remove the `(click)` event binding.
- Add an `(ngSubmit)` event binding to the `<form>` element that calls `onSaveClicked(movieForm.value)`.
- Update the `onSaveClicked` function signature to accept a `value` parameter of type `any`.
- Inside `onSaveClicked`, create a new `Movie` object by combining the current movie with the form values, then emit it.
  - Hint: `const movie = { ...this.movie(), ...value };`
> Spreading the current movie first preserves properties that are not part of the form, such as `id`. Spreading `value` afterwards replaces the editable properties with their submitted form values.
> A `<button>` inside a `<form>` has `submit` as its default type when the `type` attribute is omitted. Set `type="submit"` explicitly to make this behavior intentional and clear. A submit button triggers the form's native `submit` event, which Angular exposes as `ngSubmit`; this also allows the form to be submitted by pressing Enter. A button with `type="button"` only handles its own click and does not trigger `ngSubmit`.

**Extra**:
- Add a template reference variable to the genre input for better control.
- Add a Reset button that calls `resetForm()` on the form to restore original values.

**Result**:
> We now use NgForm to capture input changes without directly modifying the model. The data is only written to the model on submit.
> Next, we'll add validation to this form in assignment 12.
