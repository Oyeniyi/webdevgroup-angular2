import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppRequestService } from '../app.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
    albumPhotos: any[];
    idAlbum: any;
    public modalRef: BsModalRef;
    modalInfo: any;

  constructor(private appRequestService: AppRequestService, private activateRoute: ActivatedRoute, public ngProgress: NgProgress,
             private modalService: BsModalService) {
      this.albumPhotos = [];
      this.activateRoute.params.subscribe(params => {
          this.idAlbum = params['id'];
      });
  }

  ngOnInit() {
    this.ngProgress.start();
      this.appRequestService.getAllPhotosOfAlbum(this.idAlbum).subscribe(response => {
          for (let i = 0; i < response.length; i++) {
              this.albumPhotos.push(response[i]);
          }
          this.ngProgress.done();
      });
  }

  public openModal(template: TemplateRef<any>, photo) {
    this.modalInfo = photo;
    this.modalRef = this.modalService.show(template);
  }
}