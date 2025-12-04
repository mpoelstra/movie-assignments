import { Component, input } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie = input.required<Movie>();
}
