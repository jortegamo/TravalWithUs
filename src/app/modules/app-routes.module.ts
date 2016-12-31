import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './commons/not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

import { TravelsRoutesModule } from './travels/travels-routes.module';


const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    TravelsRoutesModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesWrapper {}