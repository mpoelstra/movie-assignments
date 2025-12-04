Assignment 3: Showing movie details 
==============================================

> ## Add a detail view to the app component that shows the details of the movie selected in the list 

**Links**:
- [Angular Templates](https://angular.io/guide/template-syntax)
- [Angular @if block](https://angular.dev/api/core/@if)
- [Event Binding](https://angular.io/guide/event-binding)

**Steps**:
- Add a public signal property `selectedMovie` to the app component with type `Movie | undefined`.
  - Hint: Initialize it with `undefined` to indicate no movie is selected yet.

- Add a function `onMovieClicked` to the app component class.
  - The function should accept a movie as parameter.
  - Use the `.set()` method to assign the movie parameter to the `selectedMovie` signal.

- Create a movie detail view in the app component template:
  - Add a `div` element.
  - Insert a header element `<h2>` into the `div` and display the name of the `selectedMovie` object.
  - Insert a `<div>` element beneath the header for each remaining property (id, genre, rating) and display the value.
  - Remember to call selectedMovie as a function: `selectedMovie()`
  - Use the `!` operator to tell TypeScript the value exists (non-null assertion).

- Insert a `button` element into the movie list `<li>` element with the text 'view..'.
- Add an event binding to the button `click` event, bind it to the `onMovieClicked` function and supply the clicked movie as parameter.

- Add an `@if` block to the details `div` to conditionally hide the details when no movie has been selected yet.
> The `@if` block is Angular's modern control flow syntax, replacing `*ngIf`.

**Result**:
> The view now shows movie details when a movie is clicked. The `@if` block conditionally displays the details only after selection.