import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
