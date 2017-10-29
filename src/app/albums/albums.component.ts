import { Component, OnInit } from '@angular/core';
import { AppRequestService } from '../app.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    albums: any[];

  constructor(private appRequestService: AppRequestService) { 
      this.albums = [];
  }

  ngOnInit() {
      this.appRequestService.getAllAlbums().subscribe(response => {
        //   this.posts.push(response);
          for (let i = 0; i < response.length; i++) {
              this.albums.push(response[i]);
          }
      });
  }
}