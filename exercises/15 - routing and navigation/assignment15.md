Assignment 15: Routing between views
==============================================

> ## Configure routing to navigate between different views in the application

**Links**:
- [Angular Router Guide](https://angular.io/guide/router)
- [Routing Tutorial](https://angular.io/guide/router-tutorial)
- [Route Configuration](https://angular.io/api/router/Route)
- [Router Outlet](https://angular.io/api/router/RouterOutlet)
- [provideRouter](https://angular.io/api/router/provideRouter)

**Background**:
> Angular's router enables navigation between different views. In modern Angular, we use the `provideRouter` function instead of RouterModule imports.

**Steps**:
- Verify that `index.html` has `<base href="/">` in the `<head>` section (it should already be there).

- Open `/src/app/app.routes.ts` and define routes:
  - Import the `Routes` type from `@angular/router`.
  - Import `MoviesComponent` from its location.
  - Add a route for the movies component with path `'movies'`.
  - Add a default route with empty path that redirects to `'/movies'` with `pathMatch: 'full'`.

- Verify that `app.config.ts` includes `provideRouter(routes)` in the providers array (it should already be there).

- Update the app component:
  - Remove the `<cw-movies>` component from `app.component.html`.
  - Add a `<router-outlet>` element where you want routed components to appear.
  - Import `RouterOutlet` from `@angular/router` and add it to the app component's imports array.

- Update the movies component:
  - The component no longer needs to be imported directly in AppComponent.

- Test the routing:
  - Navigate to `http://localhost:4200/` - should redirect to `/movies`
  - Navigate to `http://localhost:4200/movies` - should show the movies list and detail view

**Understanding Router Outlet**:
> The `<router-outlet>` acts as a placeholder where the router inserts the component for the current route.

**Result**:
> The application now uses routing to display different views. The root URL redirects to the movies route.
> In assignment 16, we'll create additional feature modules with their own routes.
