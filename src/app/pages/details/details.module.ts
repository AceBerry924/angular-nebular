import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
