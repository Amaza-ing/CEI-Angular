import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  readonly API_URL = "https://jsonplaceholder.typicode.com/comments";

  comments: any[];

  constructor(private http: HttpClient) {
    this.comments = [];
  }

  getComments() {
    return this.http.get<any[]>(this.API_URL);
  }
}