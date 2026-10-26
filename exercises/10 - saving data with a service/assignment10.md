Assignment 10: Saving data with HTTP PUT
==============================================

> ## Add the ability to save edited movie data back to the server

**Links**:
- [Angular HttpClient](https://angular.io/guide/http)
- [HTTP PUT Request](https://angular.io/guide/http#making-a-put-request)
- [RxJS Operators](https://rxjs.dev/guide/operators)

**Steps**:
- Add an `updateMovie` function to the `movie.service` that receives one parameter `movie`.
- Create a local variable `url` in `updateMovie` that combines the `moviesUrl` with `/` and `movie.id`.
  - Hint: Use template literals: `` `${this.moviesUrl}/${movie.id}` ``

- Create an `options` variable with HTTP headers:
  - Import `HttpHeaders` from `@angular/common/http`.
  - Set value: `{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }`

- Call the `put` function on the `http` service with `url`, `movie`, and `options` as parameters.
- Use `.pipe()` with `map()` to return the movie (the server may return empty).
  - Import `map` from `'rxjs/operators'`.
- Add `catchError(this.handleError)` to the pipe chain.
- Let the `updateMovie` function return the Observable result.

- Add a save button to the movie-detail component template with text "Save..".
- Import the `output` function and create an output property `save` that emits a Movie.
- Add an `onSaveClicked` function that emits the movie using `this.save.emit(this.movie())`.
- Bind the button's click event to `onSaveClicked`.

- In the movies component, handle the save event:
  - Extract the code from `ngOnInit` to a new `getMovies()` function.
  - Call `getMovies()` in `ngOnInit`.
  - Create an `onMovieSaved(movie: Movie)` function that calls `movieService.updateMovie(movie)`.
  - Subscribe to the result and call `getMovies()` in the `next` handler to refresh the list.

- Update the movie-detail component usage in movies template to bind the save event:
  - Add `(save)="onMovieSaved($event)"` to the `<cw-movie-detail>` element.

**Understanding the Data Flow**:
> User edits → Save button → Detail emits event → Container calls service → HTTP PUT → Refresh list

**Result**:
> Users can now edit and save movie data. Changes persist to the server and the list updates to reflect the changes.
