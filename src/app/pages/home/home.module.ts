import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbButtonModule, NbCardModule, NbDialogModule, NbSpinnerModule } from '@nebular/theme';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NbDialogModule.forRoot(),
    HomeRoutingModule,
    FormsModule
  ],

})
export class HomeModule { }
