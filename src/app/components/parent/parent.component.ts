import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { BookCardComponent } from "../book-card/book-card.component";
import { Book } from '../../models/Book';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, BookCardComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMsg: string = "Esto es un mensaje que viene de una variable definida en el padre";
  parentMsg2: string = "Otro mensaje";

  book1: Book = {
    title: "Harry Potter",
    pages: 200,
    author: "J.K. Rowling"
  }

  book2: Book = {
    title: "1984",
    pages: 150,
    author: "George Orwell"
  }
}
