Assignment 13: Reactive forms
==============================================

> ## Create a reactive form to capture and submit user input with programmatic control

**Links**:
- [Reactive Forms Guide](https://angular.io/guide/reactive-forms)
- [FormGroup API](https://angular.io/api/forms/FormGroup)
- [FormControl API](https://angular.io/api/forms/FormControl)
- [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule)

**Steps**:
- Import `ReactiveFormsModule` from `@angular/forms` and add it to the movie-detail component's imports array.
- Import `FormGroup` and `FormControl` from `@angular/forms` in the component class.
- Remove all `ngModel` directives from the template - reactive forms don't use ngModel.

- Declare a class property `movieForm` of type `FormGroup`.
- In the `ngOnInit` lifecycle hook, initialize the form:
  - Create a new `FormGroup` with `FormControl` instances for name, genre, and rating.
  - Initialize each FormControl with the corresponding value from the movie signal.

- Connect the form model to the template:
  - Add the `[formGroup]` property binding to the `<form>` element.
  - Replace `ngModel` on each input with the `formControlName` directive.
  - Use the control names you defined in the FormGroup.

- Update `onSaveClicked` to read values from the FormGroup instead of receiving a parameter.
  - Access form values via `this.movieForm.value`.
  - Combine with the movie id and emit the save event.

- Handle input changes when the parent component changes the selected movie:
  - Import `OnChanges` and `SimpleChanges` from `@angular/core`.
  - Implement `OnChanges` and add the `ngOnChanges` lifecycle hook.
  - Use `patchValue` or `setValue` to update the form when the movie input changes.

**Optional - Using FormBuilder**:
> Import and inject `FormBuilder` to simplify form creation with a more concise syntax.

**Result**:
> We now have a reactive form that provides programmatic control over form state and values. The form logic is centralized in the component class.
> Next, we'll add validation to the reactive form in assignment 14.
