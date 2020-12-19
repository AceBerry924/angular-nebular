import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from "./data.service";

const serviceProviders = [
  DataService
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: serviceProviders
})
export class ServicesModule { }
