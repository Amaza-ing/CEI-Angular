import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input()
  movie: any = {};

  messageSent = output<string>();

  @Output()
  watchlistChange = new EventEmitter<number>();

  sendMsg() {
    this.messageSent.emit('Mensaje desde ' + this.movie.title);
  }

  changeWatchlist() {
    this.watchlistChange.emit(this.movie.id);
  }
}
