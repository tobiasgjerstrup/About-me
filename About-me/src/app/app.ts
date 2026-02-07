import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FancyClock } from './core/fancy-clock/fancy-clock';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FancyClock],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('About-me');
}
