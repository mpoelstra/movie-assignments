Assignment 9: Processing user input with two-way binding
==============================================

> ## Add editable form inputs to the movie detail component

> `FormsModule` and `ngModel` are still supported in Angular 22 and are commonly found in existing applications. This assignment uses mutable two-way binding to introduce the pattern. Later assignments introduce more explicit form-state management with reactive forms and signal forms.

**Links**:
- [Two-way Binding](https://angular.dev/guide/templates/two-way-binding)
- [NgModel Directive](https://angular.dev/api/forms/NgModel)
- [FormsModule](https://angular.dev/api/forms/FormsModule)

**Steps**:
- Import `FormsModule` from `@angular/forms` and add it to the imports array of the movie-detail component.

- Add input fields to the movie-detail component template for name (text), genre (text), and rating (number).
  - Add proper labels for accessibility.
  - Use the `[(ngModel)]` directive to create two-way binding to the movie properties.
  - Remember to access movie as a function: `[(ngModel)]="movie().name"`.
> The `[(ngModel)]` syntax creates two-way binding - changes in the input update the model, and model changes update the input.

- Test the application and edit the title of the selected movie. The input changes immediately, but the title in the list may not update until you click a `Select` button.
> The detail and list components share the same movie object, so `ngModel` mutates the object that is also stored in the movies array used by `MovieListComponent`. However, the `movies` signal in the parent `MoviesComponent` still contains the same array reference and is not updated, so Angular does not receive a signal notification to refresh the sibling list component. Clicking `Select` inside the list causes Angular to check that component again, revealing the earlier mutation.

- To prevent unwanted side effects, clone the movie when selecting it:
  - In the movies component's `onMovieSelected` function, use the spread operator to clone the movie: `{...movie}`.
  - Alternative: Use `Object.assign({}, movie)` or `structuredClone(movie)`.

- Optional: Add keyboard event handling to clear the genre on Escape key press.
  - Hint: Use `(keyup.escape)="movie().genre = ''"` on the genre input.

**Understanding Two-Way Binding**:
> `[(ngModel)]` is syntactic sugar combining property binding `[]` and event binding `()`.

**Result**:
> The movie detail component now accepts user input through two-way bound form fields. Object cloning prevents unintended side effects while editing.
