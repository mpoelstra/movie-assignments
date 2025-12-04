Assignment 5: Creating a movie list component 
==============================================

> ## Create a new reusable component that shows a list of movies and use it in the app component

**Links**:
- [Angular CLI Component Generation](https://angular.io/cli/generate#component)
- [Component Input Signals](https://angular.dev/guide/components/inputs)
- [Component Output Functions](https://angular.dev/guide/components/outputs)
- [Component Communication](https://angular.io/guide/component-interaction)

**Steps**:
- Generate a new component in the `movies` folder:
```bash
ng g component movies/movie-list --skip-tests
```

- Import the required functions and the `Movie` interface in `movie-list.component.ts`:
```typescript
import { Component, input, output } from '@angular/core';
import { Movie } from '../movie.interface';
```

- Create a required input signal for the movies array:
```typescript
movies = input.required<Movie[]>();
```

- Create an output for movie selection events:
```typescript
movieClicked = output<Movie>();
```
> The `output()` function creates a type-safe event emitter. The generic parameter `<Movie>` ensures only Movie objects can be emitted.

- Create a click handler method:
```typescript
onMovieClicked(movie: Movie): void {
  this.movieClicked.emit(movie);
}
```

- Move the list HTML from app component to `movie-list.component.html`:
```html
<ul>
  @for (movie of movies(); track movie.id) {
    <li>
      {{ movie.name }} - Rating: {{ movie.rating }}
      <button (click)="onMovieClicked(movie)">view..</button>
    </li>
  }
</ul>
```

- Update the app component imports:
```typescript
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  imports: [MovieDetailComponent, MovieListComponent],
  // ...
})
```

- Rename `onMovieClicked` to `onMovieSelected` in the app component:
```typescript
onMovieSelected(movie: Movie): void {
  this.selectedMovie.set(movie);
}
```

- Replace the list HTML in `app.component.html` with the component:
```html
<h1>{{ title() }}</h1>

<cw-movie-list 
  [movies]="movies()" 
  (movieClicked)="onMovieSelected($event)">
</cw-movie-list>

@if (selectedMovie()) {
  <cw-movie-detail [movie]="selectedMovie()!"></cw-movie-detail>
}
```

**Component Communication Pattern**:
> - **Input signals** (`[property]`) pass data down from parent to child
> - **Output functions** (`(event)`) emit events up from child to parent  
> - The parent component orchestrates communication between siblings
> - This unidirectional data flow makes the app easier to understand and debug

**Result**:
> The app now uses two presentational components (list and detail) coordinated by the container component (app). This separation of concerns makes components reusable and maintainable.