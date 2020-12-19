import { Component, OnInit, TemplateRef } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  getAPI() {
    this.dataService.getPost(this.postId).subscribe((data) => {
      console.log(data);
    })
  }

}
