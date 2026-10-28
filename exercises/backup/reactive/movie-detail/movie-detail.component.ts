import { Component, input, output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../movie.interface';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'cw-movie-detail',
  styleUrls: ['./movie-detail.component.scss'],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnChanges {
  save = output<Movie>();
  movie = input.required<Movie>();

  readonly movieForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    genre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rating: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(10)] })
  });

  onSaveClicked() {
    if (this.movieForm.invalid) {
      return;
    }
    const movie = {
      ...this.movie(),
      ...this.movieForm.value
    };

    this.save.emit(movie);
  }

  ngOnChanges(): void {
    const movie = this.movie();

    this.movieForm.setValue({
      name: movie.name,
      genre: movie.genre,
      rating: movie.rating
    });
  }
}
