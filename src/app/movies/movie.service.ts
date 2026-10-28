import { inject, Service } from '@angular/core';
import { Movie } from './movie.interface';
import { HttpClient, httpResource } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';

@Service()
export class MovieService {
    private moviesUrl = 'api/movies';
    private moviesFavUrl = 'api/moviesFav';

    private http = inject(HttpClient);

    moviesResource = httpResource<Movie[]>(
        () => this.moviesUrl,
        { defaultValue: [] },
    );

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesUrl).pipe(
            retry(2),
            catchError(this.handleError)
        );
    }
    
    getFavoriteMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesFavUrl);
    }

    updateMovie(movie: Movie): Observable<void> {
        return this.http.put<void>(`${this.moviesUrl}/${movie.id}`, movie).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('An error occurred in movie service:', error);
        throw 'error';
    }
}
