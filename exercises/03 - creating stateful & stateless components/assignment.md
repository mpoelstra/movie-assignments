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

- Add an `@if` block to the details section to conditionally hide the details when no movie has been selected yet.
  - Inside the `@if` block, you can alias the signal value to avoid using the non-null assertion operator.
  - Hint: `@if (selectedMovie(); as movie)` allows you to work with `movie` directly.

- Create a movie detail view inside the `@if` block:
  - Add a `div` element.
  - Insert a header element `<h2>` into the `div` and display the name of the movie.
  - Insert a `<div>` element beneath the header for each remaining property (id, genre, rating) and display the value.

- Insert a `button` element into the movie list `<li>` element with the text 'view..'.
- Add an event binding to the button `click` event, bind it to the `onMovieClicked` function and supply the clicked movie as parameter.

**Result**:
> The view now shows movie details when a movie is clicked.