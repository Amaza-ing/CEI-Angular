import { Component, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { RouterLink } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-card',
  imports: [RouterLink],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css',
})
export class CommentCardComponent {
  @Input()
  comment?: Comment;

  updatedComment: Comment = {
    id: 1001,
    name: 'Comentario actualizado',
    email: 'email@email.com',
    body: 'cuerpo del comentario',
  };

  constructor(public commentService: CommentService) {}

  updateComment() {
    if (this.comment) {
      this.commentService
        .putComment(this.comment?.id.toString(), this.updatedComment)
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
  }

  deleteComment() {
    if (this.comment) {
      this.commentService
        .deleteComment(this.comment?.id.toString())
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
  }
}
