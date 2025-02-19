import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from "./components/parent/parent.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ParentComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
