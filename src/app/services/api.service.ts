import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPostData(postId: string) {
    return this.http.get<PostModel>(`${this.apiUrl}/${postId}`);
  }

}
