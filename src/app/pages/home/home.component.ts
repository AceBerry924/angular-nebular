import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postId: string = '';
  post: any = null;
  loading: boolean = false;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void { }

  getAPI(): void {
    this.loading = true;

    this.dataService.getPost(this.postId).subscribe((data) => {
      this.loading = false;

      this.router.navigate(['/details'], {
        state: {
          data: data
        }
      });

    }, error => {
      console.log('oops', error);
      this.loading = false;
    })
  }
}
