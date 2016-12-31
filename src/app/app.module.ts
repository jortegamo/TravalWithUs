import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppModulesWrapper } from './modules/app-modules.module';
import { AppRoutesWrapper } from './modules/app-routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppModulesWrapper,
    AppRoutesWrapper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
