import { filter, switchMap, take } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, throwError, catchError, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
      );
    constructor(/*public auth: AutorizacionService*/
        private authService : AuthService) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (localStorage.getItem('token')) {
            request = this.addToken(request, localStorage.getItem('token') as string);
          }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (
                    error instanceof HttpErrorResponse &&
                    // !request.url.includes('auth/signin') &&
                    error.status === 401
                  ) {
                    return this.handle401Error(request, next);
                  }
          
                  return throwError(() => error);
            }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(
              switchMap((tokenNew: any) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(tokenNew['token'])
                return next.handle(this.addToken(request, tokenNew['token']));
              }),
              catchError((error) => {
                this.isRefreshing = false;
    
                if (error.status == '403') {
                //   this.eventBusService.emit(new EventData('logout', null));
                }
    
                return throwError(() => error);
              })
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter((token) => token != null),
                take(1),
                switchMap((jwt) => {
                  return next.handle(this.addToken(request, jwt));
                })
              );
        }
    
      }

      private addToken(request: HttpRequest<any>, token: string){
        if(!request.url.includes("refreshToken")){
            return request.clone({
                setHeaders: {
                  Authorization: `${token}`,
                },
              });
        } else {
            return request.clone({
                setHeaders: {
                  Authorization: ``,
                },
              });
        }
        
      }
}