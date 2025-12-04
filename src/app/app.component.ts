import { Component, signal, OnInit } from '@angular/core';
import { Movie } from './movies/movie.interface';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = signal('App works!');
  movies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | undefined>(undefined);

  ngOnInit(): void {
    this.movies.set([
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'The Dark Knight', genre: 'Action', rating: 9.0 },
      { id: 4, name: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
      { id: 5, name: 'Forrest Gump', genre: 'Drama', rating: 8.8 }
    ]);
  }

  onMovieClicked(movie: Movie): void {
    this.selectedMovie.set(movie);
  }
}
