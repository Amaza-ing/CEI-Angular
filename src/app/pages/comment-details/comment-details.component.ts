import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommentService } from '../../services/comment.service';
import { CommentCardComponent } from '../../components/comment-card/comment-card.component';

@Component({
  selector: 'app-comment-details',
  imports: [HeaderComponent, CommentCardComponent],
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.css',
})
export class CommentDetailsComponent implements OnInit {
  commentId;
  comment: any;

  constructor(
    private route: ActivatedRoute,
    public commentService: CommentService
  ) {
    this.commentId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    this.commentService.getCommentById(this.commentId as string).subscribe({
      next: (data) => {
        this.comment = data;
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
