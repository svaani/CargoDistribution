import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})

export class TriplistComponent implements OnInit {

  tripName: string = "hello";
  tripList = null;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //localhost:8080/cargo/api/hub/retrieve_tripsheet?vehicleTripId=168&loggedInUserId=13

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('vehicleTripId', '168');
    urlSearchParams.append('loggedInUserId', '13');

    this.http.get('http://35.154.80.6:8080/cargo/api/hub/retrieve_tripsheet?vehicleTripId=168&loggedInUserId=13').subscribe((data) => {
       console.log(data);
       this.tripList = data;
      // alert("yes");
      }
      )


  }

}
