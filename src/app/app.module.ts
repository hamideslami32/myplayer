import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from './components/player/player.component';
import { CommentSectionComponent } from './components/comments/comment-section/comment-section.component';
import { CommentComponent } from './components/comments/comment-section/comment/comment.component';
import { CreateCommentComponent } from './components/comments/comment-section/create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CommentSectionComponent,
    CommentComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
