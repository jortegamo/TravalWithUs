import { NgModule } from '@angular/core';

import { CommonsAppModule } from './commons/commons.module';
import { MainPageModule } from './main-page/main-page.module';
import { TravelsModule } from './travels/travels.module';


@NgModule({
  imports: [
    CommonsAppModule,
    MainPageModule,
    TravelsModule
  ]
})

export class AppModulesWrapper {}