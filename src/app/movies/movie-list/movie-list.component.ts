import { Component, input, output } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  imports: [],
  selector: 'cw-movie-list',
  styleUrl: './movie-list.component.scss',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movies = input.required<Movie[]>();
  movieClicked = output<Movie>();

  onMovieClicked(movie: Movie) {
    this.movieClicked.emit(movie);
  }
}
