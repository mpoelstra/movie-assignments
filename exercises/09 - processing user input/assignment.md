Assignment 9: Processing user input with two-way binding
==============================================

> ## Add editable form inputs to the movie detail component

**Links**:
- [Two-way Binding](https://angular.io/guide/two-way-binding)
- [NgModel Directive](https://angular.io/api/forms/NgModel)
- [FormsModule](https://angular.io/api/forms/FormsModule)
- [User Input](https://angular.io/guide/user-input)

**Steps**:

**1. Add FormsModule to MovieDetailComponent**
- Import `FormsModule` in `movie-detail.component.ts`:
```typescript
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-detail',
  imports: [FormsModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie = input.required<Movie>();
}
```

**2. Add Form Inputs to the Template**
- Update `movie-detail.component.html` to add input fields:
```html
<div>
  <h2>{{ movie().name }}</h2>
  <div>ID: {{ movie().id }}</div>
  <div>Genre: {{ movie().genre }}</div>
  <div>Rating: {{ movie().rating }}</div>
  
  <div>
    <label for="name">Name:</label>
    <input id="name" type="text" [(ngModel)]="movie().name" />
  </div>
  
  <div>
    <label for="genre">Genre:</label>
    <input id="genre" type="text" [(ngModel)]="movie().genre" />
  </div>
  
  <div>
    <label for="rating">Rating:</label>
    <input id="rating" type="number" [(ngModel)]="movie().rating" />
  </div>
</div>
```
> The `[(ngModel)]` syntax creates two-way binding. Changes in the input update the model, and model changes update the input.

**3. Test the Two-Way Binding**
- Run the application and select a movie
- Edit the name, genre, or rating in the input fields
- Notice the changes are immediately reflected in the list above
> This happens because the same movie object reference is shared between the list and detail components.

**4. Fix Unwanted Data Sharing with Object Cloning**
- To prevent edits from affecting the list immediately, clone the movie when selecting:
- Update `movies.component.ts`:
```typescript
onMovieSelected(movie: Movie): void {
  this.selectedMovie.set({ ...movie }); // Clone using spread operator
}
```
> The spread operator `{ ...movie }` creates a shallow copy, breaking the reference between list and detail.

Alternative cloning methods:
```typescript
// Object.assign
this.selectedMovie.set(Object.assign({}, movie));

// structuredClone (for deep cloning)
this.selectedMovie.set(structuredClone(movie));
```

**5. Optional - Clear Genre on Escape Key**
- Add keyboard event handling to the genre input:
```html
<input 
  id="genre" 
  type="text" 
  [(ngModel)]="movie().genre"
  (keyup.escape)="movie().genre = ''" 
/>
```
> Angular's event binding syntax supports keyboard event filters like `.escape`, `.enter`, etc.

**Understanding Two-Way Binding**:
> `[(ngModel)]` is syntactic sugar for:
> ```html
> <input 
>   [ngModel]="movie().name"
>   (ngModelChange)="movie().name = $event"
> />
> ```
> The banana-in-a-box syntax `[()]` combines property binding `[]` and event binding `()`.

**Important Signal Note**:
> When using signals with ngModel, you're binding to the signal's value (via `movie()`), not the signal itself. Direct mutations like `movie().name = 'new value'` work but don't trigger signal updates. For full reactivity, consider using reactive forms (covered in assignments 13-14).

**Result**:
> The movie detail component now accepts user input through two-way bound form fields. Object cloning prevents unintended side effects while editing, ensuring the list only updates after explicitly saving changes.
