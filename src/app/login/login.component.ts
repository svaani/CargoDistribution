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

    let userlogin = this.login2(usercreds);
    //  userlogin.then((res) => {
    //    if (res)
    //    this.router.navigate(['/triplist']);
    //  })
  }

  login2(usercreds) {
    var headers = new Headers();
    var creds = 'name=' + usercreds.username + '&password=' + usercreds.password + '&grant_type=password';
    let client_id = '"my-trusted-client"';
    let client_secret = 'secret';
    var basicheader = btoa(client_id + ':' + client_secret);
    var headersHere = new HttpHeaders();
    headersHere.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headersHere.set('Authorization', 'Basic '+basicheader);
    headersHere.set('Credentials','true');

    var httpOptions = {
      headers: headersHere
    };
    
    let myParams = { username: 'transity.ts@gmail.com',password : '123',grant_type:'password',client_id:'my-trusted-client' };
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', 'transity.ts@gmail.com');
    urlSearchParams.append('password', '123');
    urlSearchParams.append('grant_type','password');
    urlSearchParams.append('client_id','my-trusted-client');

    this.http.post('http://localhost:8080/cargo/oauth/token',
    urlSearchParams.toString(),
      httpOptions).subscribe((data) => {

      }
      )


  }
}
