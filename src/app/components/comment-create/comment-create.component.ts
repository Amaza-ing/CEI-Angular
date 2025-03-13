import { Component } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-create',
  imports: [],
  templateUrl: './comment-create.component.html',
  styleUrl: './comment-create.component.css'
})
export class CommentCreateComponent {

  newComment: Comment = {
    id: 1000,
    name: "Nuevo comentario",
    email: "email@email.com",
    body: "cuerpo del comentario"
  }

  constructor(public commentService: CommentService) {}

  createComment() {
    this.commentService.postComment(this.newComment).subscribe({
      next: (data) => {
        console.log(data);        
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}
