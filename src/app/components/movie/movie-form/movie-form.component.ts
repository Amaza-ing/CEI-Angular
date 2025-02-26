import { Component, Input, output } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [FormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  @Input()
  moviesLength: number = 0;

  movieCreated = output<Movie>();

  newMovie: Movie = {
    id: 0,
    title: '',
    duration: 0,
    director: '',
    img: '',
    isWatchlist: false,
  };

  errorMsg: string = "";

  handleSubmit() {
    console.log(this.newMovie);

    if(!this.newMovie.title) {
      this.errorMsg = "*Las películas deben tener un título";
      return;
    } else if(!this.newMovie.duration) {
      this.errorMsg = "*Las películas deben tener duración";
      return;
    }

    this.newMovie.id = this.moviesLength + 1;
    this.movieCreated.emit(this.newMovie);

    this.newMovie.title = '';
    this.newMovie.duration = 0;
    this.newMovie.director = '';
    this.newMovie.img = '';
    this.errorMsg = "";
  }
}
