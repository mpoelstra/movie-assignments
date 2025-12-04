import { Component, signal, OnInit, inject } from '@angular/core';
import { Movie } from '../movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'cw-movies',
  imports: [MovieDetailComponent, MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  private movieService = inject(MovieService);
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    this.movies.set(this.movieService.getMovies());
  }

  onMovieSelected(movie: Movie): void {
    this.selectedMovie.set(movie);
  }
}
