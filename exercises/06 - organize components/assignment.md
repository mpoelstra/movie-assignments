Assignment 6: Organizing components into feature modules
==============================================

> ## Extract movie functionality into a dedicated container component

**Links**:
- [Angular Component Organization](https://angular.io/guide/styleguide#component-structure)
- [Feature Organization](https://angular.io/guide/styleguide#folders-by-feature-structure)

**Steps**:
- Generate a movies container component:
```bash
ng g component movies/movies --skip-tests
```
> This creates a container component to manage all movie-related functionality.

- Move movie functionality from `app.component.ts` to `movies.component.ts`:
  - Move the `Movie` interface import
  - Move the `movies` signal
  - Move the `selectedMovie` signal  
  - Move the `ngOnInit` lifecycle hook with movie initialization
  - Move the `onMovieSelected` function
  - Implement the `OnInit` interface

The movies component should look like:
```typescript
import { Component, signal, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'cw-movies',
  imports: [MovieDetailComponent, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    this.movies.set([
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'The Dark Knight', genre: 'Action', rating: 9.0 }
    ]);
  }

  onMovieSelected(movie: Movie): void {
    this.selectedMovie.set(movie);
  }
}
```

- Move the movie HTML from `app.component.html` to `movies.component.html`:
```html
<cw-movie-list 
  [movies]="movies()" 
  (movieClicked)="onMovieSelected($event)">
</cw-movie-list>

@if (selectedMovie()) {
  <cw-movie-detail [movie]="selectedMovie()!"></cw-movie-detail>
}
```

- Update `app.component.ts`:
  - Remove Movie, MovieDetailComponent, and MovieListComponent imports
  - Import MoviesComponent
  - Update imports array to only include MoviesComponent
  - Remove movies, selectedMovie signals
  - Remove ngOnInit and onMovieSelected

The app component becomes:
```typescript
import { Component, signal } from '@angular/core';
import { MoviesComponent } from './movies/movies/movies.component';

@Component({
  selector: 'app-root',
  imports: [MoviesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('Movie App');
}
```

- Update `app.component.html` to use the movies component:
```html
<h1>{{ title() }}</h1>

<cw-movies></cw-movies>
```

**Architecture Benefits**:
> - **Separation of Concerns**: App component focuses on app-level concerns
> - **Feature Encapsulation**: All movie functionality is in one feature
> - **Scalability**: Easy to add more features (dashboard, user profile, etc.)
> - **Maintainability**: Changes to movies don't affect other features

**Result**:
> The app component is now lean and focused on composition. The movies feature is self-contained with its own container component managing the movie list and detail interactions.