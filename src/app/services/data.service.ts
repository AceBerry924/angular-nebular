import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }


  getPost(postId: string) {
    return this.http.get<PostModel>(`${this.apiUrl}/${postId}`);
  }

}
