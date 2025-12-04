Assignment 13: Reactive forms
==============================================

> ## Create a reactive form to capture and submit user input with programmatic control

**Links**:
- [Reactive Forms Guide](https://angular.io/guide/reactive-forms)
- [FormGroup API](https://angular.io/api/forms/FormGroup)
- [FormControl API](https://angular.io/api/forms/FormControl)
- [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule)
- [Typed Forms](https://angular.io/guide/typed-forms)

**Steps**:
> Set up reactive forms infrastructure:
- Import `ReactiveFormsModule` from `@angular/forms` and add it to the movie-detail component's imports array.
- Import `FormGroup` and `FormControl` from `@angular/forms` in the component class.
- Remove all `ngModel` directives from the template - reactive forms don't use ngModel.
- Keep the `name` attributes on input fields for accessibility.

> Create the form model programmatically:
- Declare a class property `movieForm` of type `FormGroup` or use `FormGroup<{...}>` for strong typing.
- In the `ngOnInit` lifecycle hook, initialize the form:
```typescript
ngOnInit(): void {
  this.movieForm = new FormGroup({
    name: new FormControl(this.movie().name),
    genre: new FormControl(this.movie().genre),
    rating: new FormControl(this.movie().rating)
  });
}
```
> Each FormControl is initialized with a value from the movie signal.

> Connect the form model to the template:
- Add the `[formGroup]` property binding to the `<form>` element: `[formGroup]="movieForm"`.
- Replace the `ngModel` directive on each input with the `formControlName` directive:
  - Name input: `formControlName="name"`
  - Genre input: `formControlName="genre"`
  - Rating input: `formControlName="rating"`
> The formControlName connects each input to its corresponding FormControl in the FormGroup.

> Handle form submission:
- Keep the `(ngSubmit)` event binding on the form element: `(ngSubmit)="onSaveClicked()"`.
- Update the `onSaveClicked` method to read values from the FormGroup:
```typescript
onSaveClicked(): void {
  const updatedMovie: Movie = {
    id: this.movie().id,
    name: this.movieForm.value.name,
    genre: this.movieForm.value.genre,
    rating: this.movieForm.value.rating
  };
  this.save.emit(updatedMovie);
}
```
> Alternatively, use the spread operator: `{ id: this.movie().id, ...this.movieForm.value }`

**Handle input changes**:
> When the parent component changes the selected movie, we need to update the form:
- Import `OnChanges`, `SimpleChanges` from `@angular/core`.
- Implement the `OnChanges` interface and add the `ngOnChanges` lifecycle hook:
```typescript
ngOnChanges(changes: SimpleChanges): void {
  if (changes['movie'] && !changes['movie'].isFirstChange()) {
    this.movieForm?.patchValue({
      name: this.movie().name,
      genre: this.movie().genre,
      rating: this.movie().rating
    });
  }
}
```
> Use `patchValue` to update only specified fields, or `setValue` to update all fields at once.

**Extra - Using FormBuilder**:
> The FormBuilder service simplifies form creation:
- Import and inject `FormBuilder` using the `inject` function:
```typescript
private fb = inject(FormBuilder);
```
- Refactor the form creation in `ngOnInit`:
```typescript
this.movieForm = this.fb.group({
  name: [this.movie().name],
  genre: [this.movie().genre],
  rating: [this.movie().rating]
});
```
> FormBuilder provides a more concise syntax, especially when adding validators (next assignment).

**Extra - Strongly Typed Forms**:
> Use TypeScript interfaces for better type safety:
```typescript
interface MovieForm {
  name: FormControl<string>;
  genre: FormControl<string>;
  rating: FormControl<number>;
}

movieForm: FormGroup<MovieForm>;
```

**Result**:
> We now have a reactive form that provides programmatic control over form state and values. Unlike template-driven forms, all form logic is in the component class, making it easier to test and maintain.
> Next, we'll add validation to the reactive form in assignment 14.
