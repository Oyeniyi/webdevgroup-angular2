import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NgProgressModule } from 'ngx-progressbar';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { PhotosComponent } from './photos/photos.component';


import { AppRequestService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    CommentsComponent,
    UsersComponent,
    UsersDetailsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    NgProgressModule,
    NavbarModule,
    FooterModule,
    ModalModule.forRoot()
  ],
  providers: [
    AppRequestService
  ],
  exports: [
    ModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }