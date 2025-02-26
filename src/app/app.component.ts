import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from "./components/parent/parent.component";
import { MovieListComponent } from "./components/movie/movie-list/movie-list.component";
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { UserFormComponent } from "./components/user-form/user-form.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NewsSectionComponent, ParentComponent, MovieListComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
