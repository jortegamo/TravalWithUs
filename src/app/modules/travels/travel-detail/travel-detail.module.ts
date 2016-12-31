import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TravelDetailComponent } from './travel-detail.component';

@NgModule({
  declarations: [
    TravelDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TravelDetailModule {}