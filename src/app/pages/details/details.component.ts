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
    this.post = this.postService.getPost();

    if (this.post === null) {
      this.router.navigateByUrl("/");
    }
  }

}
