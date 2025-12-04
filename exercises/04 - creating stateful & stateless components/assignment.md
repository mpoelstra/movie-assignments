Assignment 4: Creating a movie detail component 
==============================================

> ## Create a new reusable component that shows the details of a movie and use it in the app component

**Links**:
- [Angular CLI Component Generation](https://angular.io/cli/generate#component)
- [Component Input Signals](https://angular.dev/guide/components/inputs)
- [Smart vs Presentational Components](https://angular.io/guide/styleguide#presentational-and-container-component-pattern)

**Steps**:
- Create a new component in the `movies` folder using the angular-cli generator command `ng g component movies/movie-detail --skip-tests` in the integrated terminal.

- Import the angular `input` function from @angular/core and create a required input property `movie` of type `Movie`.
  - Hint: Use `input.required<Movie>()`.

- Copy the movie detail HTML from the app component template to the movie detail component template.
  - Make sure the property bindings are set to the movie property and called as a function: `movie()`.

- Replace the detail HTML in the app component template with the movie detail component.
  - Use the movie detail component by adding a `<cw-movie-detail>` element inside the `@if` block.
  - Add a property binding to the element that binds the input property `movie` to the aliased movie variable from the `@if` block.
  - The `@if` should remain in the app component HTML. A parent component is responsible for when and if a child is displayed.

- Make sure the AppComponent knows the MovieDetailComponent.
  - Add the movie-detail component to the imports array of app.component.ts.

**Result**:
> The view will still show the details of the movie, but now via a reusable presentational component.