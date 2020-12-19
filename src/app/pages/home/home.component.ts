import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

import { ErrorDialogComponent } from '../../components/error-dialog/error-dialog.component';

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
    private postService: PostService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void { }

  getAPI(): void {
    this.loading = true;

    this.apiService.getPostData(this.postId).subscribe((data) => {
      this.loading = false;

      if (!data.title || !data.body) {
        this.open('Title or Body is missing from Post');
        return;
      }

      this.postService.setPost(data);
      this.router.navigate(['/details']);

    }, error => {
      this.loading = false;
      this.open(error.message);
    })
  }

  open(err: string) {
    this.dialogService.open(ErrorDialogComponent, {
      context: {
        error: err,
      }
    });
  }
}
