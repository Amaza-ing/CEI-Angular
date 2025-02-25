import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  output,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnChanges, OnDestroy {
  @Input()
  movie: Movie = {
    id: 0,
    title: '',
    duration: 0,
    director: '',
    img: '',
    isWatchlist: false,
  };

  messageSent = output<string>();

  @Output()
  watchlistChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios en el input');
  }

  ngOnDestroy(): void {
    console.log('Componente MovieCard Destruido');
  }

  sendMsg() {
    this.messageSent.emit('Mensaje desde ' + this.movie.title);
  }

  changeWatchlist() {
    this.watchlistChange.emit(this.movie.id);
  }
}
