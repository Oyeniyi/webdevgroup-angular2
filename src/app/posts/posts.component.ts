import { Component, OnInit } from '@angular/core';
import { AppRequestService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: any[];

  constructor(private appRequestService: AppRequestService) { 
      this.posts = [];
  }

  ngOnInit() {
      this.appRequestService.getAllPosts().subscribe(response => {
        //   this.posts.push(response);
          for (let i = 0; i < response.length; i++) {
              this.posts.push(response[i]);
          }
      });
  }
}