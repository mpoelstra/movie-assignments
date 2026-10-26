Assignment 8b: Getting movies with httpResource
===============================================

> ## Bonus: Use Angular's `httpResource` to fetch movies reactively

**Background**:
> In assignment 8 you used `HttpClient` to fetch movies as an `Observable`.
>
> Angular also provides `httpResource`, which integrates HTTP requests with Angular signals. In this bonus assignment you keep the existing `HttpClient` implementation and add an `httpResource` version alongside it. HttpResource is brand new and stable since Angular 22.

**Links**:
- [Angular httpResource guide](https://angular.dev/guide/http/http-resource)
- [Angular httpResource API](https://angular.dev/api/common/http/httpResource)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular HttpClient](https://angular.dev/guide/http)

**Steps**:
- Keep the existing `getMovies()` implementation from assignment 8.
- Import `httpResource` from `'@angular/common/http'`.
- Add a `moviesResource` property to the `movie.service`:

```ts
moviesResource = httpResource<Movie[]>(
  () => this.moviesUrl,
  { defaultValue: [] },
);
```

> The first argument to httpResource defines the request. It is provided as a function so Angular can track any signals used to build that request. If one of those signals changes, `httpResource` can automatically perform a new request.
>
> In this example `moviesUrl` is static, so there are no reactive dependencies yet.

- Update the `movies.component` to use the resource instead of subscribing to `getMovies()`:

```ts
readonly moviesResource = this.movieService.moviesResource;
movies = this.moviesResource.value;
```

> `value` is a signal, so existing template code that uses `movies()` can continue to work.

- Remove the `getMovies()` subscription from `ngOnInit`.
- Run the application and verify that the movies are still loaded from the mock server.

- Inspect some additional resource state:

```ts
this.moviesResource.isLoading();
this.moviesResource.error();
this.moviesResource.hasValue();
```

- Optionally show a loading state in the template:

```html
@if (moviesResource.isLoading()) {
  <p>Loading movies...</p>
}
```

- Try manually reloading the data:

```ts
this.moviesResource.reload();
```

**Compare with HttpClient**:

With `HttpClient`:

```ts
getMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl).pipe(
    retry(2),
    catchError(this.handleError),
  );
}
```

The component subscribes to the Observable and updates a signal.

With `httpResource`:

```ts
readonly moviesResource = httpResource<Movie[]>(
  () => this.moviesUrl,
  { defaultValue: [] },
);
```

The component can directly use the resource's signals. No manual `subscribe()` is required.

**Understanding httpResource**:
> - `httpResource` uses Angular's HTTP infrastructure.
> - It performs a `GET` request by default.
> - The response is exposed through the `value` signal.
> - Loading and error states are available as signals.
> - A resource can be refreshed using `reload()`.
> - When signals used by the request change, the resource can automatically make a new request.
> - Use `httpResource` mainly for reading data. For `POST`, `PUT`, `PATCH` and `DELETE`, prefer `HttpClient`.

**Result**:
> The `movie.service` now demonstrates both approaches side by side:
>
> - `HttpClient` + `Observable`
> - `httpResource` + Signals
