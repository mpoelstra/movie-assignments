import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie.interface';

@Component({
  imports: [FormsModule],
  selector: 'cw-movie-detail',
  styleUrls: ['./movie-detail.component.scss'],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent {
  save = output<Movie>();
  movie = input.required<Movie>();

  onSaveClicked(movie: Movie) {
    // Implement save logic here, e.g., call a service to update the movie
    console.log('Saving movie:', movie);
    this.save.emit(movie);
  }
}
