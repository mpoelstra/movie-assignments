Assignment 10: Saving data with HTTP PUT
==============================================

> ## Add the ability to save edited movie data back to the server

**Links**:
- [Angular HttpClient](https://angular.io/guide/http)
- [HTTP PUT Request](https://angular.io/guide/http#making-a-put-request)
- [RxJS Operators](https://rxjs.dev/guide/operators)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

**Steps**:

**1. Add updateMovie Method to MovieService**
- Create an `updateMovie` method in `movie.service.ts`:
```typescript
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

updateMovie(movie: Movie): Observable<Movie> {
  const url = `${this.moviesUrl}/${movie.id}`;
  const options = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  };
  
  return this.http.put<Movie>(url, movie, options).pipe(
    map(() => movie),
    catchError(this.handleError)
  );
}
```
> - Template literals create the URL: `api/movies/1`
> - HTTP headers specify JSON content type
> - `map()` returns the original movie since the API might return empty response
> - `catchError()` handles errors consistently

**2. Add Save Button to MovieDetailComponent**
- Import the `output` function in `movie-detail.component.ts`:
```typescript
import { Component, input, output } from '@angular/core';

export class MovieDetailComponent {
  movie = input.required<Movie>();
  save = output<Movie>();
  
  onSaveClicked(): void {
    this.save.emit(this.movie());
  }
}
```

- Add the save button to `movie-detail.component.html`:
```html
<div>
  <!-- ... existing fields ... -->
  
  <button (click)="onSaveClicked()">Save..</button>
</div>
```
> The detail component remains "presentational" - it emits events but doesn't know about services or HTTP.

**3. Handle Save Event in MoviesComponent**
- Extract movie fetching to a reusable method:
```typescript
export class MoviesComponent implements OnInit {
  private movieService = inject(MovieService);
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies.set(movies);
      },
      error: (err: Error) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  onMovieSelected(movie: Movie): void {
    this.selectedMovie.set({ ...movie });
  }

  onMovieSaved(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe({
      next: () => {
        console.log('Movie saved successfully');
        this.getMovies(); // Refresh the list
      },
      error: (err: Error) => {
        console.error('Error saving movie:', err);
      }
    });
  }
}
```

- Update the template in `movies.component.html`:
```html
<cw-movie-list 
  [movies]="movies()" 
  (movieClicked)="onMovieSelected($event)">
</cw-movie-list>

@if (selectedMovie()) {
  <cw-movie-detail 
    [movie]="selectedMovie()!" 
    (save)="onMovieSaved($event)">
  </cw-movie-detail>
}
```

**Understanding the Data Flow**:
> 1. User edits movie in detail component
> 2. User clicks Save button
> 3. Detail component emits save event with movie data
> 4. Container component receives event and calls service
> 5. Service sends HTTP PUT request to server
> 6. On success, component refreshes the movie list
> 7. Updated movie appears in the list

**Why Refresh After Save?**
> While we could update the local list directly, fetching from the server ensures we have the "source of truth". In a real app, the server might add timestamps, normalize data, or apply business rules.

**Optional - Optimistic Updates**:
> For better UX, update the list immediately before the server responds:
```typescript
onMovieSaved(movie: Movie): void {
  // Optimistic update
  const updatedMovies = this.movies().map(m => 
    m.id === movie.id ? movie : m
  );
  this.movies.set(updatedMovies);

  // Then sync with server
  this.movieService.updateMovie(movie).subscribe({
    next: () => console.log('Synced with server'),
    error: (err) => {
      console.error('Save failed, reverting:', err);
      this.getMovies(); // Revert on error
    }
  });
}
```

**Result**:
> Users can now edit and save movie data. Changes persist to the simulated server and the list updates to reflect the changes. The component architecture keeps concerns separated: the detail component handles display and user input, while the container component manages data flow and server communication.
