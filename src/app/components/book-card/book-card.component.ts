import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  @Input()
  book: any = {};

  // book = input({
  //   title: "",
  //   pages: 0,
  //   author: ""
  // })
}
