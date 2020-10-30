import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // clone request and replace 'http://' with 'https://' at the same time
    const secureReq = req.clone({
        url: req.url.replace('http://', 'https://')
    });
    // send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }
}