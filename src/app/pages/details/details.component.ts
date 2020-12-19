import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../services/post.service';

import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: PostModel = null;

  constructor(private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    // get post data from PostService
    this.post = this.postService.getPost();

    // go to Homepage if post is null
    if (this.post === null) {
      this.goHomePage();
    }
  }

  goHomePage(): void {
    this.router.navigateByUrl("/");
  }

}
