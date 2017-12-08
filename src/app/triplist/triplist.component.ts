import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

declare var google: any;

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})

export class TriplistComponent implements OnInit {

  @ViewChild('map') mapRef:ElementRef;

  tripName: string = "hello";

  constructor(private http: HttpClient,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {

    this.DisplayMap();
  }

  DisplayMap(){
    
         const location = new google.maps.LatLng(13.0005618,80.2478447);
    
         const options = {
            center:location,
            zoom:10,
            streetViewControl:false,
           
          };
            const map = new google.maps.Map(this.mapRef.nativeElement,options);
          this.addMarker(location,map);
      }
    
      addMarker(position,map) {
          return new google.maps.Marker({
            position,
            map
          });
        }
}
