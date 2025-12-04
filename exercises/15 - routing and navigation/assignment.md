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
> Angular's router enables navigation between different views. In modern Angular (14+), we use standalone components and the `provideRouter` function instead of RouterModule imports.

**Steps**:

> Verify base href:
- Ensure `index.html` has `<base href="/">` in the `<head>` section (it should already be there).

> Define routes in app.routes.ts:
- Open `/src/app/app.routes.ts` (this file should already exist).
- Import `Routes` type from `@angular/router`.
- Import `MoviesComponent` from its location.
- Add a route for the movies component:
```typescript
import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
```
> The empty path redirects to movies by default. `pathMatch: 'full'` ensures exact matching.

> Update app.config.ts:
- Verify that `provideRouter(routes)` is included in the providers array in `app.config.ts`:
```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // ... other providers
  ]
};
```
> This should already be configured from the project setup.

> Update the app component:
- Remove the `<cw-movies>` component from `app.component.html`.
- Add a `<router-outlet>` element where you want routed components to appear:
```html
<h1>
  {{ title() }}
</h1>

<router-outlet></router-outlet>
```

- Import `RouterOutlet` in the app component's imports array:
```typescript
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('Movie App');
}
```

> Update the movies component:
- Since MoviesComponent is now routed, you can optionally remove its selector or keep it for flexibility.
- The component no longer needs to be imported directly in AppComponent.

> Test the routing:
- Start the dev server: `ng serve`
- Navigate to `http://localhost:4200/` - should redirect to `/movies`
- Navigate to `http://localhost:4200/movies` - should show the movies list and detail view

**Understanding Router Outlet**:
> The `<router-outlet>` acts as a placeholder where the router inserts the component for the current route. When navigating to `/movies`, Angular displays the MoviesComponent in the outlet.

**Result**:
> The application now uses routing to display different views. The root URL redirects to the movies route. This sets the foundation for adding more routes in the next assignments.
> In assignment 16, we'll create additional feature modules with their own routes.
