import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TravelEditComponent } from './travel-edit.component';

@NgModule({
  declarations: [
    TravelEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TravelEditModule {}