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
import { CommentFormComponent } from './sections/comments/comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    CommentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
