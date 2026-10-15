import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {End} from './components/end/end';

@Component({
  imports: [RouterOutlet, End],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exemplo-app');
}