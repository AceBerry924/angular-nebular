import { Injectable } from '@angular/core';

import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: PostModel = null;

  constructor() { }

  getPost(): PostModel {
    return this.post;
  }

  setPost(post: PostModel) {
    this.post = post;
  }

}
