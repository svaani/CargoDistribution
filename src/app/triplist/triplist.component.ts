import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})

export class TriplistComponent implements OnInit {

  tripName: string = "hello";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.head
    this.http.get('http://35.154.80.6:8080/cargo/api/hub/retrieve_tripsheet?vehicleTripId=168&loggedInUserId=13',
    {headers :  new HttpHeaders().set('Authorization', 'Bearer 44ead9d6-97a6-474d-9610-84bef64a35a7')}).subscribe(data => {
      console.log(data);
    })
  }

}
