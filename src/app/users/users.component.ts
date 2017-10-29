import { Component, OnInit } from '@angular/core';
import { AppRequestService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: any[];

  constructor(private appRequestService: AppRequestService) { 
      this.users = [];
  }

  ngOnInit() {
      this.appRequestService.getAllUsers().subscribe(response => {
        //   this.posts.push(response);
          for (let i = 0; i < response.length; i++) {
              this.users.push(response[i]);
          }
      });
  }
}