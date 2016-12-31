import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TravelCreateComponent } from './travel-create.component';

@NgModule({
  declarations: [
    TravelCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TravelCreateModule {}