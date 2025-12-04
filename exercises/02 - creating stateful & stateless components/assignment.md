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
- Define an interface `Movie` that represents the Movie object type with properties: id, name, genre, rating.
  - Declare the correct typing for each property.
  - Export the interface to make it reusable.
> TypeScript interfaces provide compile-time type checking and better IDE support.

- Import the `Movie` interface in the app component.
- Change the typing of the movies signal from `any[]` to `Movie[]`.
- Verify there are no TypeScript errors. If any errors occur, ensure all movie objects have the correct properties.

**Result**:
> We now have a strongly typed interface for movies, providing better type safety and autocomplete support.