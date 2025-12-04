Assignment 5: Creating a movie list component 
==============================================

> ## Create a new reusable component that shows a list of movies and use it in the app component

**Links**:
- [Angular CLI Component Generation](https://angular.io/cli/generate#component)
- [Component Input Signals](https://angular.dev/guide/components/inputs)
- [Component Output Functions](https://angular.dev/guide/components/outputs)
- [Component Communication](https://angular.io/guide/component-interaction)

**Steps**:
- Create a new component in the `movies` folder using the angular-cli generator command `ng g component movies/movie-list --skip-tests`.
  - Before you continue, add this movie-list component to the imports array of the app.component.ts.

- Import the angular `input` and `output` functions from @angular/core in the new MovieList component.
- Create a required input signal `movies` with the typing array of `Movie`.
  - Hint: Use `input.required<Movie[]>()`.

- Create an output property `movieClicked` that will emit a Movie.
  - Hint: Use `output<Movie>()` to create a type-safe event emitter.

- Copy the list HTML from the app component to the movie-list template.
- Create a function `onMovieClicked` in the movie-list component which accepts a movie as parameter.
- The click event of the buttons in the `movie-list.component.html` should now be bound to the `onMovieClicked` function of the movie-list component.
- Use the `movieClicked` output property to emit an event and supply the clicked movie as event value.

- Replace the movie list HTML in the app component template with the `<cw-movie-list>` component.
  - Add a property binding to the element that binds the movies from the app component to the input property of the movie list.
  - Rename the function `onMovieClicked` in the app component to `onMovieSelected` and use the parameter to set the `selectedMovie`.
  - Add an event binding to the `movieClicked` event and bind it to `onMovieSelected` in the app component. Don't forget to supply `$event` as parameter.

**Result**:
> The view will still show the list of movies and will show the details of a clicked movie, but now via reusable presentational components. The parent component orchestrates communication between siblings.