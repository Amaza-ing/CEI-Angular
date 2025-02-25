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
  moviesLenght: number = 0;

  movieCreated = output<Movie>();

  newMovie: Movie = {
    id: 0,
    title: '',
    duration: 0,
    director: '',
    img: '',
    isWatchlist: false,
  };

  handleSubmit() {
    console.log(this.newMovie);

    this.newMovie.id = this.moviesLenght + 1;
    this.movieCreated.emit(this.newMovie);

    this.newMovie.title = '';
    this.newMovie.duration = 0;
    this.newMovie.director = '';
    this.newMovie.img = '';
  }
}
