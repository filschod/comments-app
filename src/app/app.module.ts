import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ServicesComponent } from './pages/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { WhatWeDoComponent } from './sections/what-we-do/what-we-do.component';
import { QualificationComponent } from './sections/qualification/qualification.component';
import { CommentsComponent } from './sections/comments/comments.component';
import { IntroComponent } from './sections/intro/intro.component';
import { BlogComponent } from './sections/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ServicesComponent,
    WhatWeDoComponent,
    QualificationComponent,
    CommentsComponent,
    IntroComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
