import { Component, input, Input } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  @Input()
  book: Book = {
    title: '',
    pages: 0,
    author: '',
  };

  // book = input({
  //   title: "",
  //   pages: 0,
  //   author: ""
  // })
}
