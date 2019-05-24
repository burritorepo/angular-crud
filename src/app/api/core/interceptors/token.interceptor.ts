import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {
      'Content-Type':  'application/json; charset=UTF-8'
    };

    headersConfig['X-XSRF-TOKEN'] = sessionStorage.getItem('token');
    const request = req.clone({ setHeaders: headersConfig });
    const obs = next.handle(request);
    return obs;
  }
}