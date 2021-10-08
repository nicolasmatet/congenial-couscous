import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { LandingGridComponent } from './landing-grid/landing-grid.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AnimalSelectionComponent } from './animal-selection/animal-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AnimalPageComponent,
    LandingGridComponent,
    AnimalSelectionComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
