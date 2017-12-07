import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})

export class TriplistComponent implements OnInit {

  tripName: string = "hello";

  constructor(private http: HttpClient,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

}
