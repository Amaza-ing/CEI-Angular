import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from "./components/parent/parent.component";
import { MovieListComponent } from "./components/movie/movie-list/movie-list.component";
import { NewsSectionComponent } from './components/news-section/news-section.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NewsSectionComponent, ParentComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
