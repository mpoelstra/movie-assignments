Assignment 16: Dashboard component with routing
==============================================

> ## Create a dashboard component that displays favorite movies with its own route

**Links**:
- [Router Configuration](https://angular.io/api/router/Route)
- [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)

**Steps**:
- Generate a new standalone component: `ng g component dashboard --skip-tests`

- Implement the dashboard component:
  - Import and inject the `MovieService` using the `inject()` function.
  - Create a signal `favMovies` to store favorite movies.
  - In `ngOnInit`, call `movieService.getFavMovies()` and subscribe to the result.
  - Update the signal with the received movies.

- Display favorite movies in the template:
  - Create an unordered list with an `@for` loop.
  - Display movie name and rating for each favorite movie.
  - Add an `@empty` block for when there are no favorites.

- Verify the MovieService has `getFavMovies`:
  - It should already exist from assignment 08.

- Add the dashboard route:
  - Open `app.routes.ts` and import `DashboardComponent`.
  - Add a new route for the dashboard with path `'dashboard'`.
  - Update the default route to redirect to `'/dashboard'` instead of `'/movies'`.

- Test the new route:
  - Navigate to `http://localhost:4200/dashboard` to see favorite movies.
  - Navigate to `http://localhost:4200/movies` to see all movies.

**Result**:
> We now have a dashboard component displaying favorite movies, accessible via its own route. The application has two main views.
> Next, in assignment 17, we'll add navigation links to easily switch between views.
