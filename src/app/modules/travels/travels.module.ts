import { NgModule } from '@angular/core';

import { TravelCreateModule } from './travel-create/travel-create.module';
import { TravelDetailModule } from './travel-detail/travel-detail.module';
import { TravelEditModule } from './travel-edit/travel-edit.module';
import { TravelListModule } from './travel-list/travel-list.module';

@NgModule({
  imports: [
    TravelCreateModule,
    TravelDetailModule,
    TravelEditModule,
    TravelListModule
  ]
})
export class TravelsModule {}