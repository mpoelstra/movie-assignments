Assignment 1: Displaying a list of movies
==============================================

> ## Use the app component to define an array of movie objects and display it as a list in the browser

**Links:**
- [HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [TypeScript Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Angular Components](https://angular.io/guide/component-overview)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular @for block](https://angular.dev/api/core/@for)

**Steps**:
- Declare a public signal property `movies` in the app component with type `any[]`:
```typescript
movies = signal<any[]>([]);
```
> Signals are Angular's reactive primitive for managing state. Changes to signals automatically trigger view updates.

- Implement the `OnInit` interface and add the `ngOnInit` lifecycle hook to initialize the movies:
```typescript
import { Component, signal, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
  movies = signal<any[]>([]);
  
  ngOnInit(): void {
    this.movies.set([
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'The Dark Knight', genre: 'Action', rating: 9.0 }
    ]);
  }
}
```
> Each movie object should have: `id` (number), `name` (string), `genre` (string), `rating` (number).

- Create an unordered list `<ul>` in the app component template.
- Use the `@for` control flow syntax to loop over the movies and create list items:
```html
<ul>
  @for (movie of movies(); track movie.id) {
    <li>{{ movie.name }} - Rating: {{ movie.rating }}</li>
  }
</ul>
```
> The `track` expression is required to help Angular identify which items have changed. Using `movie.id` as the tracking key is best practice for unique identifiers.

**Result**:
> We now have a component that displays a list of movies using signals and the modern @for syntax. The component reactively updates when the movies signal changes.