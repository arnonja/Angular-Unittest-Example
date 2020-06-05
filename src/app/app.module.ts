import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Dependency/welcome/welcome.component';
import { CitizenIdComponent } from './Class testing/citizen-id/citizen-id.component';
import { LightbulbComponent } from './DOM testing/lightbulb/lightbulb.component';
import { ListComponent } from './Routing Component/list/list.component';
import { DetailComponent } from './Routed Component/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CitizenIdComponent,
    LightbulbComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
