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
- Declare a public signal property `movies` in the app component with type `any[]`.
  - Hint: Use `signal<any[]>([])` to create a signal.
> Signals are Angular's reactive primitive for managing state. Changes to signals automatically trigger view updates.

- Implement the `OnInit` interface and add the `ngOnInit` lifecycle hook to initialize the movies.
  - In the `ngOnInit` method, use the `.set()` method to populate the movies signal with an array of movie objects.
  - A movie object should have: `id` (number), `name` (string), `genre` (string), `rating` (number).

> Before signals, initializing component state in `ngOnInit` was a common Angular pattern. Data often came from inputs or services, so initialization was kept separate from property declarations and constructors. It was not required for a static array, but you will still encounter this pattern in many existing Angular codebases.

- Create an unordered list `<ul>` in the app component template.
- Use the `@for` control flow syntax to loop over the movies and create list items.
  - Don't forget to call the signal as a function: `movies()`
  - Add a `track` expression using `movie.id` to help Angular identify which items have changed.
  - Display the name and rating for each movie using interpolation.

**Result**:
> We now have a component that displays a list of movies using signals and the @for syntax.

**Bonus: Initialize without `ngOnInit`**:
- Remove the `OnInit` interface and the `ngOnInit` method.
- Initialize the `movies` signal directly when declaring the property.
- Verify that the application behaves exactly the same.
- Consider when `ngOnInit` would still be useful.

> Signals do not replace Angular lifecycle hooks. In this example, no lifecycle hook is needed because the initial value is immediately available.