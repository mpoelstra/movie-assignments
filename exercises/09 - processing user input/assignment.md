Assignment 9: Processing user input with two-way binding
==============================================

> ## Add editable form inputs to the movie detail component

**Links**:
- [Two-way Binding](https://angular.io/guide/two-way-binding)
- [NgModel Directive](https://angular.io/api/forms/NgModel)
- [FormsModule](https://angular.io/api/forms/FormsModule)

**Steps**:
- Import `FormsModule` from `@angular/forms` and add it to the imports array of the movie-detail component.

- Add input fields to the movie-detail component template for name (text), genre (text), and rating (number).
  - Add proper labels for accessibility.
  - Use the `[(ngModel)]` directive to create two-way binding to the movie properties.
  - Remember to access movie as a function: `[(ngModel)]="movie().name"`.
> The `[(ngModel)]` syntax creates two-way binding - changes in the input update the model, and model changes update the input.

- Test the application and notice changes are immediately reflected in the list.
> This happens because the same movie object reference is shared.

- To prevent unwanted side effects, clone the movie when selecting it:
  - In the movies component's `onMovieSelected` function, use the spread operator to clone the movie: `{...movie}`.
  - Alternative: Use `Object.assign({}, movie)` or `structuredClone(movie)`.

- Optional: Add keyboard event handling to clear the genre on Escape key press.
  - Hint: Use `(keyup.escape)="movie().genre = ''"` on the genre input.

**Understanding Two-Way Binding**:
> `[(ngModel)]` is syntactic sugar combining property binding `[]` and event binding `()`.

**Result**:
> The movie detail component now accepts user input through two-way bound form fields. Object cloning prevents unintended side effects while editing.
