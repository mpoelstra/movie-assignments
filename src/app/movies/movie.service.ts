import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(): Movie[] {
    return [
      { id: 1, name: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
      { id: 2, name: 'The Godfather', genre: 'Crime', rating: 9.2 },
      { id: 3, name: 'The Dark Knight', genre: 'Action', rating: 9.0 },
      { id: 4, name: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
      { id: 5, name: 'Forrest Gump', genre: 'Drama', rating: 8.8 }
    ];
  }
}
