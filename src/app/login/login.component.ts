import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams} from '@angular/http';
import { AuthService } from '../auth.service';
import {DefaultUrlSerializer} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }
  login(usercreds) {
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', this.user.username);
    urlSearchParams.append('password', this.user.password);
    urlSearchParams.append('grant_type','password');
    urlSearchParams.append('client_id','my-trusted-client');

    this.http.post('http://localhost:8080/cargo/oauth/token',
    urlSearchParams.toString()).subscribe((data) => {
      this.router.navigate(['/triplist']);
      }
      )


  }
}
