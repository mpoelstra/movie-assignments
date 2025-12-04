Assignment 6: Organizing components into feature modules
==============================================

> ## Extract movie functionality into a dedicated container component

**Links**:
- [Angular Component Organization](https://angular.io/guide/styleguide#component-structure)
- [Feature Organization](https://angular.io/guide/styleguide#folders-by-feature-structure)

**Steps**:
- Generate a movies component for all the movie functionality with the angular-cli command `ng g component movies/movies --skip-tests`.

- Move all movie functionality from the app component to the movies component.
  - Move any movie imports, properties and functions from the app component to the movies component.
  - Move the movie list and detail elements from the app component template to the movies component template.
  - Move the imports of the movie detail and movie list components from the app component to the movies component.
  - Import the movies component into the app component and add it to the imports array.
  - Add the movies component `<cw-movies>` in the HTML template of the app component, to get the application working again.

**Architecture Benefits**:
> - **Separation of Concerns**: App component focuses on app-level concerns
> - **Feature Encapsulation**: All movie functionality is in one feature
> - **Scalability**: Easy to add more features (dashboard, user profile, etc.)

**Result**:
> The app component is now lean and focused on composition. The movies feature is self-contained with its own container component managing the movie list and detail interactions.
