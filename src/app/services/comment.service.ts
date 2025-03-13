import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/comments';

  comments: Comment[];

  constructor(private http: HttpClient) {
    this.comments = [];
  }

  getComments() {
    return this.http.get<Comment[]>(this.API_URL);
  }

  getCommentById(id: string) {
    return this.http.get<Comment>(`${this.API_URL}/${id}`);
  }

  postComment(newComment: Comment) {
    return this.http.post<any>(this.API_URL, newComment);
  }

  putComment(id: string, updatedComment: Comment) {
    return this.http.put<any>(`${this.API_URL}/${id}`, updatedComment);
  }

  deleteComment(id: string) {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
