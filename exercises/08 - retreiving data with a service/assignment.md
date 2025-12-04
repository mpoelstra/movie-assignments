Assignment 8: Getting movies from HTTP
==============================================

> ## Use Angular's HttpClient to fetch movies from a remote/mock server

**Background**:
> This project uses Angular's in-memory web API to simulate a backend server. See `stub-server.md` for implementation details.

**Links**:
- [Angular HttpClient](https://angular.io/guide/http)
- [RxJS Observables](https://rxjs.dev/guide/observable)
- [RxJS Operators](https://rxjs.dev/guide/operators)
- [HTTP Error Handling](https://angular.io/guide/http#error-handling)

**Steps**:
- Verify that `app.config.ts` includes `provideHttpClient()` in the providers array (it should already be there).

- Import the `HttpClient` service from `'@angular/common/http'` into the `movie.service`.
- Inject the HttpClient using the `inject()` function as a private property `http` with type `HttpClient`.
- Declare two private properties `moviesUrl` and `moviesFavUrl` in the `movie.service` and assign the values `'api/movies'` and `'api/moviesFav'` to them.

- Edit the `getMovies` function to use the `httpClient` to asynchronously get the remote movie data:
  - Remove the hardcoded array of movies from the `getMovies` function.
  - In the `getMovies` function, call the `get` function on the `http` service and supply the `moviesUrl` as single parameter.
  - Change the return type of the `getMovies` function to `Observable<Movie[]>`. Import `Observable` from `'rxjs'`.
  - Add the type parameter `<Movie[]>` to the `get` function call.
  - Return the result from the `get` function.
> HttpClient returns an `Observable` - a stream of data over time. The generic type `<Movie[]>` tells TypeScript what data the server will return.

- Add error handling and retry logic:
  - Import `catchError` and `retry` from `'rxjs/operators'`.
  - Use `.pipe()` to chain `retry(2)` and `catchError(this.handleError)` to the get call.
  - Create a private `handleError` method that logs the error and returns `throwError` (import from 'rxjs').

- Repeat the steps for favorite movies in a `getFavMovies` function using `moviesFavUrl`.

- Update the `movies.component` to handle the Observable:
  - In `ngOnInit`, call `movieService.getMovies()` and save the result to a local variable.
  - Call `.subscribe()` on the result with an observer object containing `next` and `error` handlers.
  - In the `next` handler, use `.set()` to update the movies signal with the received data.
  - In the `error` handler, log the error to the console.

**Understanding Observables**:
> - Observables are lazy - they don't execute until subscribed
> - HttpClient observables automatically unsubscribe after completion
> - Operators like `retry` and `catchError` transform or handle the stream

**Result**:
> Movies are now fetched asynchronously from a simulated server using HttpClient and RxJS Observables.
