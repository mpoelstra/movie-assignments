Assignment 14: Reactive form validation
==============================================

> ## Add validation rules and error messages to the reactive form

**Links**:
- [Reactive Form Validation](https://angular.io/guide/form-validation#reactive-form-validation)
- [Validators Class](https://angular.io/api/forms/Validators)
- [FormControl Validation](https://angular.io/guide/form-validation#validating-input-in-reactive-forms)
- [Custom Validators](https://angular.io/guide/form-validation#defining-custom-validators)

**Validation Rules**:
- Name: required, minimum length of 4 characters
- Genre: required
- Rating: required, between 0 and 10

**Steps**:
> Add validators to FormControls:
- Import `Validators` from `@angular/forms`.
- Update the FormControl definitions to include validators as the second parameter:
```typescript
this.movieForm = new FormGroup({
  name: new FormControl(this.movie().name, [
    Validators.required,
    Validators.minLength(4)
  ]),
  genre: new FormControl(this.movie().genre, [
    Validators.required
  ]),
  rating: new FormControl(this.movie().rating, [
    Validators.required,
    Validators.min(0),
    Validators.max(10)
  ])
});
```
> Validators are applied as an array to each FormControl.

> Or if using FormBuilder:
```typescript
this.movieForm = this.fb.group({
  name: [this.movie().name, [Validators.required, Validators.minLength(4)]],
  genre: [this.movie().genre, [Validators.required]],
  rating: [this.movie().rating, [Validators.required, Validators.min(0), Validators.max(10)]]
});
```

> Display validation errors in the template:
- Access form controls in the template using `movieForm.controls['controlName']` or create getter methods.
- Add error message divs below each input field using `@if` directives:

For the name field:
```html
<div>
  @if (movieForm.controls['name'].errors?.['required'] && movieForm.controls['name'].touched) {
    <span class="error">Name is required</span>
  }
  @if (movieForm.controls['name'].errors?.['minlength'] && movieForm.controls['name'].touched) {
    <span class="error">Name must be at least 4 characters</span>
  }
</div>
```

For the genre field:
```html
<div>
  @if (movieForm.controls['genre'].errors?.['required'] && movieForm.controls['genre'].touched) {
    <span class="error">Genre is required</span>
  }
</div>
```

For the rating field:
```html
<div>
  @if (movieForm.controls['rating'].errors?.['required'] && movieForm.controls['rating'].touched) {
    <span class="error">Rating is required</span>
  }
  @if (movieForm.controls['rating'].errors?.['min'] && movieForm.controls['rating'].touched) {
    <span class="error">Rating must be at least 0</span>
  }
  @if (movieForm.controls['rating'].errors?.['max'] && movieForm.controls['rating'].touched) {
    <span class="error">Rating must be at most 10</span>
  }
</div>
```

> Prevent invalid form submission:
- Update `onSaveClicked` to check form validity:
```typescript
onSaveClicked(): void {
  if (!this.movieForm.valid) {
    console.error('Form is invalid');
    // Mark all fields as touched to show all errors
    this.movieForm.markAllAsTouched();
    return;
  }
  
  const updatedMovie: Movie = {
    id: this.movie().id,
    ...this.movieForm.value
  };
  this.save.emit(updatedMovie);
}
```

- Disable the submit button when form is invalid:
```html
<button type="submit" [disabled]="!movieForm.valid">Save..</button>
```

**Optional - Create getter methods for cleaner templates**:
> Add getter methods in the component for easier template access:
```typescript
get nameControl() {
  return this.movieForm.controls['name'];
}

get genreControl() {
  return this.movieForm.controls['genre'];
}

get ratingControl() {
  return this.movieForm.controls['rating'];
}
```

Then use them in the template:
```html
@if (nameControl.errors?.['required'] && nameControl.touched) {
  <span class="error">Name is required</span>
}
```

**Optional - Subscribe to form changes**:
> Reactive forms allow you to observe form value changes:
```typescript
ngOnInit(): void {
  this.movieForm = // ... form creation
  
  this.movieForm.valueChanges.subscribe(value => {
    console.log('Form value changed:', value);
  });
  
  // Watch specific control
  this.movieForm.controls['rating'].valueChanges.subscribe(rating => {
    console.log('Rating changed:', rating);
  });
}
```

**Styling**:
> Add CSS for visual feedback (same as template-driven forms):
```scss
input.ng-invalid.ng-touched {
  border-color: red;
}

.error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
```

**Result**:
> We now have a reactive form with comprehensive validation. The programmatic approach provides more control and testability compared to template-driven forms. The validation logic is centralized in the component class, making it easier to maintain and reuse.
> Next, we'll implement routing in assignment 15 to navigate between different views.
