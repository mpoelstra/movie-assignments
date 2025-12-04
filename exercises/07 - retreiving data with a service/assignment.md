Assignment 7: Retrieving data with a service
==============================================

> ## Create a service that returns movie data, separating data management from component logic

**Links**:
- [Angular Services](https://angular.io/guide/architecture-services)
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [Injectable Services](https://angular.io/guide/injectable-services)
- [inject() Function](https://angular.io/api/core/inject)

**Steps**:
- Generate a new service in the `movies` folder:
```bash
ng g service movies/movie --skip-tests
```
> This creates `movie.service.ts` with the `@Injectable({ providedIn: 'root' })` decorator, making it a singleton available throughout the app.

- Create a `getMovies` method in `movie.service.ts`:
```typescript
import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(): Movie[] {
    return [
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'The Dark Knight', genre: 'Action', rating: 9.0 },
      { id: 4, name: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
      { id: 5, name: 'Forrest Gump', genre: 'Drama', rating: 8.8 }
    ];
  }
}
```

- Inject the service in the movies component using the `inject()` function:
```typescript
import { Component, signal, OnInit, inject } from '@angular/core';
import { MovieService } from '../movie.service';

export class MoviesComponent implements OnInit {
  private movieService = inject(MovieService);
  // ... rest of properties
}
```
> The `inject()` function is the modern way to inject dependencies in Angular. It's cleaner than constructor injection and works with standalone components.

- Update `ngOnInit` to fetch movies from the service:
```typescript
ngOnInit(): void {
  this.movies.set(this.movieService.getMovies());
}
```

- Remove the hardcoded movie array from the component.

**Dependency Injection Benefits**:
> - **Separation of Concerns**: Components focus on presentation, services handle data
> - **Testability**: Easy to mock services in tests
> - **Reusability**: Multiple components can share the same service instance
> - **Maintainability**: Data logic changes don't affect components

**Why `providedIn: 'root'`?**
> This makes the service a singleton shared across the entire application. Angular's tree-shakable providers ensure unused services are removed from production builds.

**Result**:
> Movie data is now managed by a dedicated service. Components request data through the service interface without knowing implementation details. This follows the Single Responsibility Principle and makes the code more maintainable.