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
    username: 'transity.ts@gmail.com',
    password: '123'
  };
  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }
  login2(usercreds) {

    let userlogin = this.auth.login(usercreds);
      userlogin.then((res) => {
        if (res)
        this.router.navigate(['/triplist']);
      })
  }

  login(usercreds) {
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', usercreds.username);
    urlSearchParams.append('password', usercreds.password);
    urlSearchParams.append('grant_type','password');
    urlSearchParams.append('client_id','my-trusted-client');

    this.http.post('http://35.154.80.6:8080/cargo/oauth/token',
    urlSearchParams.toString()).subscribe((data) => {
      this.auth.setToken(data);
      this.router.navigate(['/triplist']);
      }
      )


  }
}
