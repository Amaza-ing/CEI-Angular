import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-comment-list',
  imports: [CommentCardComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent implements OnInit {
  hasError: boolean = false;
  hasLoaded: boolean = false;

  constructor(public commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe({
      next: (data) => {
        console.log(data);
        this.commentService.comments = data;

        this.hasError = false;
        this.hasLoaded = true;
      },
      error: (e) => {
        console.log(e);
        this.hasError = true;
        this.hasLoaded = true;
      },
    });
  }
}
