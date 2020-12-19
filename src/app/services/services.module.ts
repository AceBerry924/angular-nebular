import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from "./api.service";
import { PostService } from './post.service';

const serviceProviders = [
  APIService,
  PostService
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: serviceProviders
})
export class ServicesModule { }
