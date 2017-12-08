import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
   isAuthenticated: boolean = false;
   userId;
   windowHandle;
   ourcode;
   accesstoken;
  constructor(public http: HttpClient, private router: Router) { }

login(usercreds){
  var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password+'&grant_type=password';
        let client_id = '"my-trusted-client"';
        let client_secret= 'secret';
        var basicheader = btoa(client_id + ':' + client_secret);
        
        var httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/X-www-form-urlencoded','Authorization': 'Basic '+ basicheader })
        };
        
  
        return new Promise((resolve) => {
        this.http.post('http://35.154.80.6:8080/oauth/token', creds,httpOptions).subscribe((data) => {
            
            }
        )
        
        })
}


}