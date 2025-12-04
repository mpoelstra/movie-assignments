Assignment 8: Getting movies from HTTP
==============================================

> ## Use Angular's HttpClient to fetch movies from a remote/mock server

**Background**:
> This project uses Angular's in-memory web API to simulate a backend server. See `stub-server.md` for implementation details.

**Links**:
- [Angular HttpClient](https://angular.io/guide/http)
- [RxJS Observables](https://rxjs.dev/guide/observable)
- [RxJS Operators](https://rxjs.dev/guide/operators)
- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [HTTP Error Handling](https://angular.io/guide/http#error-handling)

**Steps**:

**1. Verify HTTP Configuration**
- Check that `app.config.ts` includes `provideHttpClient()`:
```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // ... other providers
  ]
};
```

**2. Update MovieService to use HttpClient**
- Import required dependencies in `movie.service.ts`:
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from './movie.interface';
```

- Inject HttpClient and define URL constants:
```typescript
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private moviesUrl = 'api/movies';
  private moviesFavUrl = 'api/moviesFav';
  
  // ... methods
}
```
> Using `inject()` is the modern approach for dependency injection in Angular.

**3. Convert getMovies to use HTTP**
- Update the `getMovies` method to return an Observable:
```typescript
getMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl).pipe(
    retry(2),
    catchError(this.handleError)
  );
}
```
> - `get<Movie[]>()` tells TypeScript the expected response type
> - `retry(2)` automatically retries failed requests twice
> - `catchError()` handles errors gracefully

**4. Add Error Handling**
- Create a private error handler method:
```typescript
private handleError(error: any): Observable<never> {
  console.error('An error occurred:', error);
  return throwError(() => new Error('Something went wrong; please try again later.'));
}
```

**5. Create getFavMovies Method**
- Add a method for fetching favorite movies:
```typescript
getFavMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesFavUrl).pipe(
    retry(2),
    catchError(this.handleError)
  );
}
```
> This method will be used in later assignments for the dashboard feature.

**6. Update MoviesComponent to Subscribe**
- Update `ngOnInit` in `movies.component.ts`:
```typescript
ngOnInit(): void {
  this.movieService.getMovies().subscribe({
    next: (movies: Movie[]) => {
      this.movies.set(movies);
    },
    error: (err: Error) => {
      console.error('Error fetching movies:', err);
    }
  });
}
```
> Observables are lazy - they don't execute until subscribed. The `subscribe` method has three optional callbacks: next (success), error, and complete.

**Understanding Observables**:
> - **Observable**: A stream of data over time
> - **Cold Observable**: HttpClient observables don't start until subscribed
> - **Auto-unsubscribe**: HttpClient observables automatically unsubscribe after completion
> - **Operators**: Functions like `retry` and `catchError` transform or handle the stream

**Optional - Using Async Pipe**:
> For a more reactive approach, you can use the async pipe to subscribe automatically in the template:

In component:
```typescript
movies$ = this.movieService.getMovies();
```

In template:
```html
@if (movies$ | async; as movies) {
  <cw-movie-list 
    [movies]="movies" 
    (movieClicked)="onMovieSelected($event)">
  </cw-movie-list>
}
```
> The async pipe automatically subscribes and unsubscribes, preventing memory leaks.

**Testing Error Handling**:
- Temporarily change `moviesUrl` to an invalid URL like `'api/wrong'`
- Check the browser console for error messages
- Verify the retry mechanism attempts the request multiple times
- Change it back to `'api/movies'` after testing

**Result**:
> Movies are now fetched asynchronously from a simulated server using HttpClient and RxJS Observables. The service handles errors gracefully with automatic retries, providing a robust data layer for the application.
