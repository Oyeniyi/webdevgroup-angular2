import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { AppRequestService } from '../app.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    allCommentsOfPost: any[];
    idPost: any;
    postInfo: any;

  constructor(private appRequestService: AppRequestService, private activateRoute: ActivatedRoute, public ngProgress: NgProgress) {
      this.allCommentsOfPost = [];
      this.activateRoute.params.subscribe(params => {
          this.idPost = params['id'];
       });
  }

  ngOnInit() {
    this.ngProgress.start();
    this.appRequestService.getPostById(this.idPost).subscribe(response => {
        this.postInfo = response;
        this.appRequestService.getAllCommentsOfPost(this.idPost).subscribe(responseComment => {
            for (let i = 0; i < responseComment.length; i++) {
                this.allCommentsOfPost.push(responseComment[i]);
            }
            this.ngProgress.done();
        })
    })
  }
}