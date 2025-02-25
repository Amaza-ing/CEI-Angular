import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from '../../models/Movie';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCardComponent, NgClass, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  showMovies: boolean = true;
  myClass: string[] = ["highlighted", "big"];
  isDark: boolean = false;

   constructor() {
    console.log("Mensaje desde el constructor");
    
    this.movies = [
      {
        id: 1,
        title: "El Señor de los Anillos",
        duration: 300,
        director: "Peter Jackson",
        img: "https://i.blogs.es/049666/el-senor-de-los-anillos-mejor-orden-peliculas/1366_2000.jpg",
        isWatchlist: false
      },
      {
        id: 2,
        title: "Star Wars",
        duration: 120,
        director: "George Lucas",
        img: "https://i.blogs.es/8330d9/star-wars-orden-todas-las-peliculas/1366_2000.jpeg",
        isWatchlist: false
      },
      {
        id: 3,
        title: "La Naranja Mecánica",
        duration: 100,
        director: "Stanley Kubrick",
        img: "https://images.justwatch.com/poster/307021958/s718/la-naranja-mecanica.jpg",
        isWatchlist: true
      },
    ]
  }

  ngOnInit(): void {
    console.log("Mensaje desde el OnInit");    
  }

  receiveMsg(msg: string) {
    console.log("El mensaje: " + msg);    
  }

  toggleWatchlist(id: number) {
    const selectedMovie = this.movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      selectedMovie.isWatchlist = !selectedMovie.isWatchlist;
    }
  }

  addNewMovie(movie: Movie) {
    this.movies.push({...movie})
  }

  toggleMovies() {
    this.showMovies = !this.showMovies;
  }

  toggleDark() {
    this.isDark = !this.isDark;
  }




  newMovie: Movie = {
    id: 0,
    title: "",
    duration: 0,
    director: "",
    img: "",
    isWatchlist: false
  }

  handleSubmit() {
    console.log(this.newMovie);

    this.newMovie.id = this.movies.length + 1;
    this.addNewMovie(this.newMovie);

    this.newMovie.title = "";
    this.newMovie.duration = 0;
    this.newMovie.director = "";
    this.newMovie.img = "";
  }
}
