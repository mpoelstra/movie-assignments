import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private moviesUrl = 'api/movies';
  private moviesFavUrl = 'api/moviesFav';

  getMovies(): Observable<Movie[]> {
    const result = this.http.get<Movie[]>(this.moviesUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
    return result;
  }

  getFavMovies(): Observable<Movie[]> {
    const result = this.http.get<Movie[]>(this.moviesFavUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
    return result;
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
