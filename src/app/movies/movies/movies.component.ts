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
    this.getMovies();
  }

  getMovies(): void {
    const result = this.movieService.getMovies();
    result.subscribe({
      next: (movies: Movie[]) => {
        this.movies.set(movies);
      },
      error: (err: Error) => {
        console.error('Error fetching movies:', err);
      }
    });
  }

  onMovieSelected(movie: Movie): void {
    this.selectedMovie.set({ ...movie });
  }

  onMovieSaved(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe({
      next: () => {
        console.log('success');
        this.getMovies();
      },
      error: (err: Error) => {
        console.error('Error saving movie:', err);
      }
    });
  }
}
