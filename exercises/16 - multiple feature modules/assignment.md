Assignment 16: Dashboard feature with routing
==============================================

> ## Create a dashboard component that displays favorite movies with its own route

**Links**:
- [Feature Modules](https://angular.io/guide/feature-modules)
- [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)
- [Router Configuration](https://angular.io/api/router/Route)
- [Standalone Components Routing](https://angular.io/guide/standalone-components#routing-and-lazy-loading)

**Steps**:

> Generate a dashboard component:
- Use Angular CLI to generate a new standalone component:
```bash
ng g component dashboard --skip-tests
```
- This creates `dashboard.component.ts`, `dashboard.component.html`, and `dashboard.component.scss`.

> Implement the dashboard component:
- Import necessary dependencies and inject the MovieService:
```typescript
import { Component, signal, OnInit, inject } from '@angular/core';
import { Movie } from '../movies/movie.interface';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private movieService = inject(MovieService);
  favMovies = signal<Movie[]>([]);

  ngOnInit(): void {
    this.movieService.getFavMovies().subscribe({
      next: (movies) => this.favMovies.set(movies),
      error: (err) => console.error('Error loading favorites:', err)
    });
  }
}
```

> Display favorite movies in the template:
- Open `dashboard.component.html` and add a list of favorite movies:
```html
<h2>Favorite Movies</h2>

<ul>
  @for (movie of favMovies(); track movie.id) {
    <li>{{ movie.name }} - {{ movie.rating }}/10</li>
  }
  @empty {
    <li>No favorite movies yet</li>
  }
</ul>
```

> Verify the MovieService has getFavMovies:
- The `getFavMovies` method should already exist in `movie.service.ts` from assignment 08.
- If not, add it:
```typescript
getFavMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesFavUrl).pipe(
    retry(2),
    catchError(this.handleError)
  );
}
```

> Add the dashboard route:
- Open `app.routes.ts` and import the DashboardComponent.
- Add a new route for the dashboard:
```typescript
import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent }
];
```
> The default route now redirects to the dashboard instead of movies.

> Test the new route:
- Navigate to `http://localhost:4200/dashboard` to see your favorite movies.
- Navigate to `http://localhost:4200/movies` to see all movies.

**Optional - Lazy Loading**:
> For larger applications, consider lazy loading feature routes:
```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  { 
    path: 'movies', 
    loadComponent: () => import('./movies/movies/movies.component')
      .then(m => m.MoviesComponent)
  }
];
```
> This loads components on-demand, reducing initial bundle size.

**Optional - Add a header to dashboard**:
> Style the dashboard to distinguish it from the movies view:
```html
<div class="dashboard">
  <h2>🎬 My Favorite Movies</h2>
  
  <div class="favorites-grid">
    @for (movie of favMovies(); track movie.id) {
      <div class="movie-card">
        <h3>{{ movie.name }}</h3>
        <p>Genre: {{ movie.genre }}</p>
        <p>Rating: {{ movie.rating }}/10</p>
      </div>
    }
    @empty {
      <p>No favorite movies found. Add some movies to your favorites!</p>
    }
  </div>
</div>
```

**Result**:
> We now have a dashboard component displaying favorite movies, accessible via its own route. The application has two main views: dashboard and movies, each serving a different purpose.
> Next, in assignment 17, we'll add navigation links to easily switch between these views.
