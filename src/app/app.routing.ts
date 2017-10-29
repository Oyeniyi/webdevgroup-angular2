import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: CommentsComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: PhotosComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UsersDetailsComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }