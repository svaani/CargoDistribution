import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams} from '@angular/http';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;
  userId;
  windowHandle;
  ourcode;
  accesstoken;
  constructor(public http: HttpClient, private router: Router) { }

  setToken(data){
    this.accesstoken = "Bearer " +data.access_token;
  }

  getToken (){
    return this.accesstoken;
  }

  login(user) {

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', user.username);
    urlSearchParams.append('password', user.password);
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('client_id', 'my-trusted-client');

    return new Promise((resolve) => {
      this.http.post('http://localhost:8080/cargo/oauth/token',
        urlSearchParams.toString()).subscribe((data) => {
        }
        )
    })
  }
}
