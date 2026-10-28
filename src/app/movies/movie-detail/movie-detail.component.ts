import { Component, input, output, signal } from '@angular/core';
import { Movie } from '../movie.interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'cw-movie-detail',
  styleUrls: ['./movie-detail.component.scss'],
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent {
  save = output<Movie>();
  movie = input.required<Movie>();

  movieModel = signal<Movie>({
    id: 0,
    name: '',
    genre: '',
    rating: 0
  });

  movieForm = form(this.movieModel);

  ngOnChanges() {
    const movie = this.movie();
    if (movie) {
      this.movieModel.set(movie);
    }
  }

  onSaveClicked(event: Event) {
    // Implement save logic here, e.g., call a service to update the movie
    event.preventDefault();
    const movieModel = this.movieModel();
    console.log('Saving movie:', movieModel);
    this.save.emit(movieModel);
  }
}
