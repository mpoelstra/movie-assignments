Assignment 17: Navigation links and active route highlighting
==============================================

> ## Add navigation links to switch between dashboard and movies views with visual feedback

**Links**:
- [RouterLink Directive](https://angular.io/api/router/RouterLink)
- [RouterLinkActive Directive](https://angular.io/api/router/RouterLinkActive)
- [Router Navigation](https://angular.io/guide/router#router-links)
- [Active Router Links](https://angular.io/guide/router-tutorial-toh#active-router-links)

**Steps**:

> Add navigation to the app component:
- Open `app.component.html` and add a navigation menu before the `<router-outlet>`:
```html
<header>
  <h1>{{ title() }}</h1>
  
  <nav>
    <ul>
      <li><a routerLink="/dashboard">Dashboard</a></li>
      <li><a routerLink="/movies">Movies</a></li>
    </ul>
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>
```

> Import RouterLink in the app component:
- Update the imports array in `app.component.ts`:
```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('Movie App');
}
```

> Add active link highlighting:
- Import and use `RouterLinkActive` to highlight the current route:
```html
<nav>
  <ul>
    <li>
      <a routerLink="/dashboard" 
         routerLinkActive="active"
         ariaCurrentWhenActive="page">
        Dashboard
      </a>
    </li>
    <li>
      <a routerLink="/movies" 
         routerLinkActive="active"
         ariaCurrentWhenActive="page">
        Movies
      </a>
    </li>
  </ul>
</nav>
```

- Update the imports in app.component.ts:
```typescript
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  // ...
})
```

> Style the navigation (app.component.scss):
```scss
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

h1 {
  margin: 0 0 1rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #555;
}

nav a.active {
  background-color: #007bff;
}

main {
  padding: 2rem;
}
```

**Advanced - Programmatic Navigation**:
> Sometimes you need to navigate programmatically from component code:
- Inject the Router service:
```typescript
import { Router } from '@angular/router';

export class SomeComponent {
  private router = inject(Router);
  
  navigateToMovies(): void {
    this.router.navigate(['/movies']);
  }
  
  navigateWithParams(): void {
    this.router.navigate(['/movies'], { 
      queryParams: { filter: 'action' } 
    });
  }
}
```

**Advanced - Router Events**:
> Listen to navigation events:
```typescript
import { Router, NavigationStart, NavigationEnd } from '@angular/core';

export class AppComponent implements OnInit {
  private router = inject(Router);
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started to:', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended at:', event.url);
      }
    });
  }
}
```

**Optional - Breadcrumbs**:
> Add breadcrumb navigation for better UX:
```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a routerLink="/">Home</a></li>
    @if (currentRoute === 'movies') {
      <li>Movies</li>
    }
    @if (currentRoute === 'dashboard') {
      <li>Dashboard</li>
    }
  </ol>
</nav>
```

**Test the navigation**:
- Click the Dashboard link - URL changes to `/dashboard`, link is highlighted
- Click the Movies link - URL changes to `/movies`, link is highlighted
- Use browser back/forward buttons - navigation works correctly
- Refresh the page on any route - correct component is displayed

**Understanding RouterLinkActive**:
> The `routerLinkActive` directive automatically adds CSS classes when the router link is active. It compares the current URL with the link's route and applies the class when they match.

**Result**:
> The application now has fully functional navigation between dashboard and movies views. Users can easily switch between views with clear visual feedback showing which view is currently active. The navigation persists across page refreshes and works with browser history.

**Congratulations!**
> You've completed all the core Angular assignments! You've learned:
> - Components and data binding (assignments 1-6)
> - Services and HTTP (assignments 7-8)
> - Forms with validation (assignments 9-14)
> - Routing and navigation (assignments 15-17)
>
> You now have a solid foundation in Angular development. Continue exploring advanced topics like state management, advanced RxJS patterns, testing, and performance optimization!
