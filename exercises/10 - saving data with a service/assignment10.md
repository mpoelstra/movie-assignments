Assignment 10: Saving data with HTTP PUT
==============================================

> ## Add the ability to save edited movie data back to the server

**Links**:
- [Angular HttpClient](https://angular.dev/guide/http)
- [Mutating Server State](https://angular.dev/guide/http/making-requests#mutating-server-state)
- [RxJS Operators](https://rxjs.dev/guide/operators)

**Steps**:
- Add an `updateMovie` function to the `movie.service` that receives one parameter `movie`.
- Create a local variable `url` in `updateMovie` that combines the `moviesUrl` with `/` and `movie.id`.
  - Hint: Use template literals: `` `${this.moviesUrl}/${movie.id}` ``

- Give `updateMovie` the return type `Observable<void>` because this API returns no response body after a successful update.
- Call the `put<void>` function on the `http` service with `url`, `movie`, and `options` as parameters.
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
  - Subscribe and call `getMovies()` in the `next` handler to refresh the list. The `next` handler receives no value, but it is still called when the request succeeds.

- Bind to the `save` event in the movie list component, this event is emitted by moviedetail:
  - Add `(save)="onMovieSaved($event)"` to the `<cw-movie-detail>` element.

**Understanding the Data Flow**:
> User edits → Save button → Detail emits event → Container calls service → HTTP PUT → Refresh list

**Result**:
> Users can now edit and save movie data. Changes persist to the server and the list updates to reflect the changes.
