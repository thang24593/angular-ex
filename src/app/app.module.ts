import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HeroDetailComponent } from './tutorial/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    TutorialComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
