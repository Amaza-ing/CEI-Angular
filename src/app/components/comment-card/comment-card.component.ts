import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})
export class CommentCardComponent {
  @Input()
  comment: any;
}
