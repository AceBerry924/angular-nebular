import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APIService } from '../../services/api.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postId: string = '';
  post: any = null;
  loading: boolean = false;

  constructor(
    private router: Router,
    private apiService: APIService,
    private postService: PostService
  ) { }

  ngOnInit(): void { }

  getAPI(): void {
    this.loading = true;

    this.apiService.getPostData(this.postId).subscribe((data) => {
      this.loading = false;

      this.postService.setPost(data);
      this.router.navigate(['/details']);

    }, error => {
      console.log('oops', error);
      this.loading = false;
    })
  }
}
