import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TravelListComponent } from './travel-list.component';

@NgModule({
  declarations: [
    TravelListComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TravelListModule {}