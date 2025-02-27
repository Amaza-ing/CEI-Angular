import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from "./components/movie/movie-list/movie-list.component";
import { UserPageComponent } from "./components/user-page/user-page.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MovieListComponent, UserPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
