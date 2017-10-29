import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ActivatedRoute } from '@angular/router';
import { AppRequestService } from '../app.service';

declare var google;

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
    @ViewChild('map') mapElement: ElementRef;

    idUser: any;
    user: any;
    showUser: any = false;

  constructor(private appRequestService: AppRequestService, private activateRoute: ActivatedRoute, public ngProgress: NgProgress) {
    this.activateRoute.params.subscribe(params => {
        this.idUser = params['id'];
    });
  }

  ngOnInit() {
      this.ngProgress.start();
      this.appRequestService.getUserById(this.idUser).subscribe(response => {
          this.showUser = true;
          this.user = response;

          // Pour la map
          const myLatlng = new google.maps.LatLng(this.user.address.geo.lng, this.user.address.geo.lat);
          const mapOptions = {
              zoom: 13,
              center: myLatlng,
              scrollwheel: false
          };
          const map = new google.maps.Map(document.getElementById('map'), mapOptions);
          const Marker = new google.maps.Marker({
              position: myLatlng,
              title: 'Position de ' + this.user.name
          });
          // To add the marker to the map, call setMap();
          Marker.setMap(map);

          this.ngProgress.done();
      });
  }
}