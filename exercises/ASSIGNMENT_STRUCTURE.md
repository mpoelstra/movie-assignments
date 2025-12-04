# Assignment Structure

## Complete Assignment List

### Core Angular Concepts (1-10)
- **00**: Setting up
- **01**: Displaying data
- **02**: Creating a movie typed object
- **03**: Showing movie details
- **04**: Creating a movie detail component
- **05**: Creating a movie list component
- **06**: Organizing components
- **07**: Retrieving data with a service
- **08**: Getting movies from HTTP
- **09**: Processing user input (basic two-way binding)
- **10**: Saving data with a service

### Template-Driven Forms (11-12)
- **11**: Template-driven forms
  - Create forms using NgForm
  - Template reference variables
  - Form submission handling
  
- **12**: Template-driven form validation
  - HTML validation attributes
  - Error messages with @if blocks
  - Form validity checking

### Reactive Forms (13-14)
- **13**: Reactive forms
  - FormGroup and FormControl
  - Programmatic form creation
  - FormBuilder service
  - Typed forms
  
- **14**: Reactive form validation
  - Validators class
  - Custom error messages
  - Form state management
  - Observable value changes

### Routing & Navigation (15-17)
- **15**: Routing between views
  - Route configuration
  - provideRouter
  - RouterOutlet
  - Basic navigation
  
- **16**: Dashboard feature with routing
  - Multiple routes
  - Feature components
  - getFavMovies implementation
  - Lazy loading (optional)
  
- **17**: Navigation links and redirecting
  - RouterLink directive
  - RouterLinkActive
  - Active route highlighting
  - Programmatic navigation

## Learning Path

```
Foundations (1-10)
    ↓
Template-Driven Forms (11-12)
    ↓
Reactive Forms (13-14)
    ↓
Routing (15-17)
```

## Comparison: Template vs Reactive Forms

| Aspect | Template-Driven (11-12) | Reactive (13-14) |
|--------|------------------------|------------------|
| Setup | FormsModule | ReactiveFormsModule |
| Form Definition | In template (HTML) | In component (TypeScript) |
| Data Binding | ngModel | formControlName |
| Validation | HTML attributes | Validators class |
| Form State | Template reference | FormGroup instance |
| Best For | Simple forms | Complex forms, dynamic forms |
| Testing | Harder | Easier |

## Prerequisites by Assignment

- **11**: Assignment 09 completed (NgModel basics)
- **12**: Assignment 11 completed
- **13**: Understanding of forms concepts
- **14**: Assignment 13 completed
- **15**: Assignments 1-10 completed
- **16**: Assignment 15 completed, getFavMovies in service
- **17**: Assignment 16 completed

## Time Estimates

- Assignments 11-12: 2-3 hours (template-driven forms)
- Assignments 13-14: 3-4 hours (reactive forms, more complex)
- Assignments 15-17: 2-3 hours (routing and navigation)

Total: 7-10 hours for assignments 11-17
