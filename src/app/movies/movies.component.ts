import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Movie } from './movie.interface';
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@Component({
  imports: [MovieDetailComponent, MovieListComponent],
  selector: 'cw-movies',
  styleUrl: './movies.component.scss',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | null>(null);

  private movieService = inject(MovieService);

  // readonly moviesResource = this.movieService.moviesResource;

  ngOnInit() {
    // this.movies = this.moviesResource.value
    this.getMovies();
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie.set({...movie});
  }

  onMovieSaved(movie: Movie) {
    this.movieService.updateMovie(movie).subscribe({
      next: () => this.getMovies(),
      error: (err) => console.error('Error occurred while saving movie:', err)
    });
  }

  private getMovies() {
    this.movieService.getMovies().subscribe({
      next: (movies) => this.movies.set(movies),
      error: (err) => console.error('Error occurred while fetching movies:', err)
    });
  }
}
