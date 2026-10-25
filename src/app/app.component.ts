import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('App works!');
}
