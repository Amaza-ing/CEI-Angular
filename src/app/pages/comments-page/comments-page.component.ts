import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommentListComponent } from "../../components/comment-list/comment-list.component";

@Component({
  selector: 'app-comments-page',
  imports: [HeaderComponent, CommentListComponent],
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.css'
})
export class CommentsPageComponent {

}
