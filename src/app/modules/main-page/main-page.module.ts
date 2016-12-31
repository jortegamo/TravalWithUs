import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class MainPageModule {}