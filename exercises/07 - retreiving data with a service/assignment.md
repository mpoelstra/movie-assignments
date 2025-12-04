Assignment 7: Retrieving data with a service
==============================================

> ## Create a service that returns movie data, separating data management from component logic

**Links**:
- [Angular Services](https://angular.io/guide/architecture-services)
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [Injectable Services](https://angular.io/guide/injectable-services)
- [inject() Function](https://angular.io/api/core/inject)

**Steps**:
- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie --skip-tests`.
  - A `movie.service.ts` file is generated with an `@Injectable` decorator.
  - By default, `providedIn: 'root'` makes it a singleton available throughout the app.

- Create a public function `getMovies` in the `movie.service` which will return the `movies` array as currently defined in the movies component. Move the hardcoded movies array from the `movies.component` to the `MovieService.getMovies` method.

- Add the `MovieService` using the `inject()` function to the movies component as a private property `movieService` with type `MovieService`.
  - Hint: `private movieService = inject(MovieService);`
> The `inject()` function is the modern way to inject dependencies in Angular.

- Retrieve the movies in the `ngOnInit` function from the `movieService`, and assign it to the public `movies` signal using `.set()`.
  - Also add the `OnInit` interface to the movies component class declaration.

- Remove the hardcoded movies array from the movie component if you haven't done so yet.

**Dependency Injection Benefits**:
> - **Separation of Concerns**: Components focus on presentation, services handle data
> - **Testability**: Easy to mock services in tests
> - **Reusability**: Multiple components can share the same service instance

**Result**:
> Movie data is now managed by a dedicated service. Components request data through the service interface without knowing implementation details.
