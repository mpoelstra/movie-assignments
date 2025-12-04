import { Component, signal } from '@angular/core';
import { MoviesComponent } from './movies/movies/movies.component';

@Component({
    selector: 'app-root',
    imports: [MoviesComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('App works!');
}
