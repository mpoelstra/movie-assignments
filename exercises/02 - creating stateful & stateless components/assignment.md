Assignment 2: Creating a movie typed object
==============================================

> ## Create a typed model definition for a movie and use it in the app component

**Links**:
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Angular Style Guide - Interfaces](https://angular.io/guide/styleguide#interfaces)

**Steps**:
- Create a new folder in the `src/app` folder and name it `movies`.
- Create a new file in the movies folder named `movie.interface.ts`.
- Define an interface `Movie` that represents the Movie object type:
```typescript
export interface Movie {
  id: number;
  name: string;
  genre: string;
  rating: number;
}
```
> TypeScript interfaces provide compile-time type checking and better IDE support. Export the interface to make it reusable across your application.

- Import the `Movie` interface in the app component:
```typescript
import { Movie } from './movies/movie.interface';
```

- Change the typing of the movies signal from `any[]` to `Movie[]`:
```typescript
movies = signal<Movie[]>([]);
```

- Verify there are no TypeScript errors. If any errors occur, ensure all movie objects have the correct properties (id, name, genre, rating).

**Best Practices**:
- Use `interface` for object shapes (recommended for Angular models)
- Use `type` for unions, intersections, or utility types
- Place interfaces in separate files for reusability
- Use descriptive names that match your domain model

**Result**:
> We now have a strongly typed interface for movies, providing better type safety, autocomplete support, and compile-time error checking. This improves code quality and developer experience.