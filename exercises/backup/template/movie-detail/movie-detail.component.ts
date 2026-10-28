import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie.interface';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'cw-movie-detail',
  styleUrls: ['./movie-detail.component.scss'],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent {
  save = output<Movie>();
  movie = input.required<Movie>();

  onSaveClicked(value: Movie, valid: boolean | null) {
    console.log('form valid:', valid);
    if (!valid) {
      console.log('Form is invalid');
      return;
    }
    const movie = { ...this.movie(), ...value };
    console.log('Merged movie value:', movie);
    // Implement save logic here, e.g., call a service to update the movie
    console.log('Saving movie:', movie);
    this.save.emit(movie);
  }
}
