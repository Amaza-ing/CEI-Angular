import { Component } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
  selector: 'app-movie-list',
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: any[] = [
    {
      id: 1,
      title: "El Señor de los Anillos",
      duration: 300,
      director: "Peter Jackson"
    },
    {
      id: 2,
      title: "Star Wars",
      duration: 120,
      director: "George Lucas"
    },
    {
      id: 3,
      title: "La Naranja Mecánica",
      duration: 100,
      director: "Stanley Kubrick"
    },
  ]
}
