import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie.interface';

@Component({
  selector: 'cw-movie-detail',
  imports: [FormsModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie = input.required<Movie>();
  save = output<Movie>();

  onSaveClicked(): void {
    this.save.emit(this.movie());
  }
}
