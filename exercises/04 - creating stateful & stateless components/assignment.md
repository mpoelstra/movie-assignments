Assignment 4: Creating a movie detail component 
==============================================

> ## Create a new reusable component that shows the details of a movie and use it in the app component

**Links**:
- [Angular CLI Component Generation](https://angular.io/cli/generate#component)
- [Component Input Signals](https://angular.dev/guide/components/inputs)
- [Smart vs Presentational Components](https://angular.io/guide/styleguide#presentational-and-container-component-pattern)

**Steps**:
- Generate a new component in the `movies` folder:
```bash
ng g component movies/movie-detail --skip-tests
```
> The `--skip-tests` flag is optional. Use it if you want to focus on implementation first and add tests later.

- Notice the generated component is a standalone component with:
  - Selector: `cw-movie-detail`
  - Empty imports array
  - Separate template and style files

- Import the `input` function and the `Movie` interface:
```typescript
import { Component, input } from '@angular/core';
import { Movie } from '../movie.interface';
```

- Create a required input signal for the movie:
```typescript
export class MovieDetailComponent {
  movie = input.required<Movie>();
}
```
> `input.required()` creates a signal-based input that must be provided by the parent component. It provides better type safety than optional inputs.

- Copy the movie detail HTML from the app component to `movie-detail.component.html`:
```html
<div>
  <h2>{{ movie().name }}</h2>
  <div>ID: {{ movie().id }}</div>
  <div>Genre: {{ movie().genre }}</div>
  <div>Rating: {{ movie().rating }}</div>
</div>
```
> Note: Access the movie input as `movie()` since it's a signal.

- Update the app component to use the new component:
  - Import `MovieDetailComponent` in `app.component.ts`:
```typescript
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
```
  - Add it to the imports array:
```typescript
@Component({
  selector: 'app-root',
  imports: [MovieDetailComponent],
  // ...
})
```

- Replace the detail HTML in `app.component.html` with the component:
```html
@if (selectedMovie()) {
  <cw-movie-detail [movie]="selectedMovie()!"></cw-movie-detail>
}
```
> Keep the `@if` in the parent component. Parent components should control when child components are displayed.

**Architecture Note**:
> MovieDetailComponent is a "presentational" (dumb) component - it receives data via inputs and displays it. It doesn't manage state or fetch data. This makes it reusable and easier to test.

**Result**:
> The view still shows movie details, but now through a reusable, testable, presentational component. The app component acts as a "container" (smart) component managing state.