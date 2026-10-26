Assignment 7: Retrieving data with a service
==============================================

> ## Create a service that returns movie data, separating data management from component logic

**Links**:
- [Creating and using services](https://angular.dev/guide/di/creating-and-using-services)
- [Dependency Injection](https://angular.dev/guide/di)
- [Service decorator](https://angular.dev/api/core/Service)

**Steps**:
- Create a new service in the `movies` folder using the angular-cli command `ng g service movies/movie --skip-tests`.
  - A `movie.service.ts` file is generated with a `@Service()` decorator.
  - The `@Service()` decorator marks the class as a service and automatically makes it available through Angular's dependency injection system.
  - By default, Angular provides the service as a singleton: one shared instance from the root injector, so no manual provider registration is needed.

> In many existing Angular codebases, you will still encounter `@Injectable({ providedIn: 'root' })`. For a root-level singleton service, this serves the same purpose as the newer `@Service()` decorator.

- Create a public function `getMovies` in the `movie.service` which will return the `movies` array as currently defined in the movies component. Move the hardcoded movies array from the `movies.component` to the `MovieService.getMovies` method.

- Add the `MovieService` using the `inject()` function to the movies component as a private property `movieService` with type `MovieService`.
  - Hint: `private movieService = inject(MovieService);`

- Retrieve the movies in the `ngOnInit` function from the `movieService`, and assign it to the public `movies` signal using `.set()`.
  - Also add the `OnInit` interface to the movies component class declaration if not already present.

- Remove the hardcoded movies array from the movie component if you haven't done so yet.

**Dependency Injection Benefits**:
> - **Separation of Concerns**: Components focus on presentation, services handle data
> - **Testability**: Easy to mock services in tests
> - **Reusability**: Multiple components can share the same service instance

**Result**:
> Movie data is now managed by a dedicated service. Components request data through the service interface without knowing implementation details.
