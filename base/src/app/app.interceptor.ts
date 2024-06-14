import {   HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError, retry } from "rxjs/operators";
   
  @Injectable()
  export class AppHttpInterceptor implements HttpInterceptor {
    constructor(
     
    ) { }
     
      intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        let token: any;
        if (localStorage.getItem("token"))
        {
          token = localStorage.getItem("token");
        }
        else{
          token='';
        }
        let updatedRequest;
        updatedRequest = req.clone({
          headers: req.headers.set("Authorization", token),
        });
      
    
        return next.handle(updatedRequest).pipe(
          tap((evt) => {
            if (evt instanceof HttpResponse) {
            }
          }),
          catchError((err: any) => {
            if (err instanceof HttpErrorResponse) {
              try {
                console.log(err)
           //     let errorMsg = err.error.text || err.error.error || err.error;
                let errorStatus = err.status.toString();
                if(errorStatus == '409'){
                //  this.toastrService.error('', 'Email Id Already Exists');
                }
                else if (errorStatus.startsWith('4')) {
                //  this.toastrService.error('', 'Invalid Credential');
                } else if (errorStatus.startsWith('5')) {
                //  this.toastrService.error('', 'Try Again');
                
                } else {
               
                }
               
              } catch (e) {
              
              }
            }
            return throwError(err);
          })
        );
      }
    

  }