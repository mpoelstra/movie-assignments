Assignment 2: Creating a movie typed object
==============================================

> ## Create a typed model definition for a movie and use it in the app component

**Links**:
- [typescript interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [typescript modules](https://www.typescriptlang.org/docs/handbook/modules.html)

**Steps**:
- Create a new folder in the app folder and name this new folder `movies`.
- Create a new file in the movies folder and name it `movie.interface.ts`.
- Define an interface `Movie` that represent the object type Movie: id, name, genre, rating.
  - Declare the correct typing for each key (example below)
- Export the interface to make it available elsewhere
- Import `Movie` in the app component.
- Change the typing of the movie array to an array of `Movie` instead of `any`.
- Fix any errors that might occur in the app component.

**Example**:

``` typescript
export interface Movie {
  id: number;
  name: string;
  genre: string;
  rating: number;
}
```

**Result**:
> We now have a reusable interface that functions as a 'model' for a new or existing Movie, a Movie model object type.
