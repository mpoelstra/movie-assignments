import { Component, input, output } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-list',
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies = input.required<Movie[]>();
  movieClicked = output<Movie>();

  onMovieClicked(movie: Movie): void {
    this.movieClicked.emit(movie);
  }
}
