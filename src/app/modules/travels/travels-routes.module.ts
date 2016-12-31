import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TravelCreateComponent } from './travel-create/travel-create.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { TravelListComponent } from './travel-list/travel-list.component';

const travelsRoutes: Routes = [
    {path: 'travels', component: TravelListComponent},
    {path: 'travels/new', component: TravelCreateComponent},
    {path: 'travels/:id', component: TravelDetailComponent},
    {path: 'travels/:id/edit', component: TravelEditComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(travelsRoutes)
  ]
})

export class TravelsRoutesModule {}