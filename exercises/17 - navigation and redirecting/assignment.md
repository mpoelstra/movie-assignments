Assignment 17: Navigation links and active route highlighting
==============================================

> ## Add navigation links to switch between dashboard and movies views with visual feedback

**Links**:
- [RouterLink Directive](https://angular.io/api/router/RouterLink)
- [RouterLinkActive Directive](https://angular.io/api/router/RouterLinkActive)
- [Router Navigation](https://angular.io/guide/router#router-links)

**Steps**:
- Add navigation to the app component template:
  - Add a `<nav>` element before the `<router-outlet>`.
  - Create an unordered list `<ul>` with two list items `<li>`.
  - Add an anchor element `<a>` in each list item with text "Dashboard" and "Movies".
  - Add the `routerLink` directive to each anchor with values `/dashboard` and `/movies`.

- Import RouterLink in the app component:
  - Import `RouterLink` from `@angular/router`.
  - Add it to the app component's imports array alongside `RouterOutlet`.

- Add active link highlighting:
  - Import and use `RouterLinkActive` directive on the anchor elements.
  - Set `routerLinkActive="active"` on each link.
  - Add `ariaCurrentWhenActive="page"` for accessibility.
  - Add `RouterLinkActive` to the app component's imports array.

- Style the navigation (optional):
  - Add CSS to `app.component.scss` to style the navigation.
  - Style the `.active` class to highlight the current route.

**Test the navigation**:
- Click the Dashboard link - URL changes to `/dashboard`, link is highlighted.
- Click the Movies link - URL changes to `/movies`, link is highlighted.
- Use browser back/forward buttons - navigation works correctly.
- Refresh the page on any route - correct component is displayed.

**Result**:
> The application now has fully functional navigation between dashboard and movies views with clear visual feedback showing which view is currently active.

**Congratulations!**
> You've completed all 17 Angular assignments! You've learned components, services, HTTP, forms, and routing using modern Angular 21 patterns.
