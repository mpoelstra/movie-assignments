Assignment 13: Reactive forms
==============================================

> ## Create a reactive form to capture and submit user input with programmatic control

**Links**:
- [Reactive Forms Guide](https://angular.dev/guide/forms/reactive-forms)
- [FormGroup API](https://angular.dev/api/forms/FormGroup)
- [FormControl API](https://angular.dev/api/forms/FormControl)
- [ReactiveFormsModule](https://angular.dev/api/forms/ReactiveFormsModule)

**Before You Start - Restore the Assignment 10 Backup**:
> Assignment 13 demonstrates reactive forms as an alternative to the template-driven form from assignments 11 and 12. Start again from the movie-detail implementation completed in assignment 10, rather than converting the validated template-driven form.

- If you want to keep your completed assignment 12 version, first create a backup of the current `src/app/movies/movie-detail` folder outside `src`.
- Restore the backup of the assignment 10 `movie-detail` folder that you created before starting assignment 11.
- Make sure the restored folder is located at `src/app/movies/movie-detail`.
- Verify that the assignment 10 version is restored: it should use `FormsModule`, `ngModel`, and the existing save output, without an `NgForm` or template-driven validation.

**Steps**:
- Import `ReactiveFormsModule`, `FormGroup`, and `FormControl` from `@angular/forms` in the component file.
- Add only `ReactiveFormsModule` to the movie-detail component's imports array.
  - Hint: `imports: [ReactiveFormsModule]`
> `ReactiveFormsModule` provides the directives used by the template. `FormGroup` and `FormControl` are model classes used in TypeScript and must not be added to the component's imports array.
- Remove all `ngModel` directives from the template and remove `FormsModule` from the component's imports array - reactive forms don't use them.

- Declare and initialize the `movieForm` property directly in the class. Let TypeScript infer the form type from its controls:
  ```ts
  readonly movieForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    genre: new FormControl('', { nonNullable: true }),
    rating: new FormControl(0, { nonNullable: true }),
  });
  ```
> Initializing the form as a class property preserves the specific control types without requiring an explicit `FormGroup` type. By default, Angular includes `null` in a `FormControl` value type because calling `reset()` can set its value to `null`. Setting `nonNullable: true` keeps these controls typed as `string` or `number` and resets them to their initial values instead. This matches the non-nullable properties of `Movie`. Do not read `this.movie()` in this initializer: Angular has not assigned the required input yet.

- Import and implement `OnChanges`, then use `ngOnChanges` to copy the selected movie into the existing form with `setValue` or `patchValue`.
  - Set `name` and `genre` to the corresponding string values and `rating` to its numeric value.
  - Hint: Use `this.movieForm.setValue({ ... })`.
> `ngOnChanges` runs after Angular assigns the movie input and runs again when the parent selects another movie.

**Alternative Approach - Synchronize with an Effect**:
> Because `movie` is a signal input, you can use `effect()` instead of `ngOnChanges`. This is a suitable use of an effect because it synchronizes a signal with the non-signal Reactive Forms API.

- Import `effect` from `@angular/core` and create the effect in the constructor:
  ```ts
  constructor() {
    effect(() => {
      // Use this.movieForm.setValue(...) to synchronize the form with this.movie().
    });
  }
  ```
- Use either `ngOnChanges` or this effect, not both.
> The effect tracks `this.movie()` and runs again when the parent supplies a different movie. There is no need to store the returned `EffectRef` here because Angular automatically cleans up a component effect when the component is destroyed. A standalone `effect()` call cannot be placed directly in the class body; call it inside the constructor or assign it to a class property.

- Connect the form model to the template:
  - Add the `[formGroup]` property binding to the `<form>` element.
  - Replace `ngModel` on each input with the `formControlName` directive.
  - Use the control names you defined in the FormGroup.

- Update `onSaveClicked` to read values from the FormGroup instead of receiving a parameter.
  - Access the form values via `this.movieForm.value`.
  - Combine the current movie with the form value and emit the result.
> `movieForm.value` contains the values of enabled controls, which is sufficient here because all controls are enabled. Use `movieForm.getRawValue()` when disabled controls must also be included.

**Optional - Using FormBuilder**:
> Import and inject `FormBuilder` to simplify form creation with a more concise syntax.

**Result**:
> We now have a reactive form that provides programmatic control over form state and values. The form logic is centralized in the component class.
> Next, we'll add validation to the reactive form in assignment 14.
