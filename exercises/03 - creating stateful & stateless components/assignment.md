Assignment 3: Showing movie details 
==============================================

> ## Add a detail view to the app component that shows the details of the movie selected in the list 

**Links**:
- [Angular Templates](https://angular.io/guide/template-syntax)
- [Angular @if block](https://angular.dev/api/core/@if)
- [Event Binding](https://angular.io/guide/event-binding)

**Steps**:
- Add a public signal property `selectedMovie` to the app component with type `Movie | undefined`:
```typescript
selectedMovie = signal<Movie | undefined>(undefined);
```
> Using `undefined` as the initial value indicates no movie is selected yet. This is better than using `null` for consistency with TypeScript's strict null checks.

- Add a function `onMovieClicked` to handle movie selection:
```typescript
onMovieClicked(movie: Movie): void {
  this.selectedMovie.set(movie);
}
```
> This function updates the signal with the selected movie, automatically triggering a view update.

- Create a movie detail view in the app component template:
  - Add a `div` element for the details section
  - Inside the div, add:
    - An `<h2>` element displaying the movie name
    - Separate `<div>` elements for id, genre, and rating
```html
<div>
  <h2>{{ selectedMovie()!.name }}</h2>
  <div>ID: {{ selectedMovie()!.id }}</div>
  <div>Genre: {{ selectedMovie()!.genre }}</div>
  <div>Rating: {{ selectedMovie()!.rating }}</div>
</div>
```
> The `!` operator (non-null assertion) tells TypeScript we're certain the value exists here.

- Add a button to each movie list item:
```html
@for (movie of movies(); track movie.id) {
  <li>
    {{ movie.name }} - Rating: {{ movie.rating }}
    <button (click)="onMovieClicked(movie)">view..</button>
  </li>
}
```

- Wrap the details div with an `@if` block to show it only when a movie is selected:
```html
@if (selectedMovie()) {
  <div>
    <h2>{{ selectedMovie()!.name }}</h2>
    <!-- ... rest of details -->
  </div>
}
```
> The `@if` block is Angular's modern control flow syntax, replacing `*ngIf`. It's more efficient and easier to read.

**Result**:
> The view now shows movie details when a movie is clicked. The `@if` block conditionally displays the details only after selection, and signals ensure reactive updates throughout the component.