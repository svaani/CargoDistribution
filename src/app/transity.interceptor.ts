import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable'

@Injectable()
export class TransityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let client_id = "my-trusted-client";
    let client_secret = 'secret';
    var basicheader = btoa(client_id + ':' + client_secret);

    const authReq = req.clone({
        headers: req.headers.set('Authorization','Basic '+basicheader)
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });

    return next.handle(authReq);
  }
}