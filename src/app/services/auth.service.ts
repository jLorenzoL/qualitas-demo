import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, tap, shareReplay, catchError } from "rxjs/operators";
import { BehaviorSubject, Observable, of, timer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    busquedaUrl : string = 'http://localhost:8080/auth';

    constructor(
        private _httpClient: HttpClient) { }


    refreshToken(){
// const token =  localStorage.getItem('token');
         var header = {
            headers: new HttpHeaders()
                .set('Authorization',  ``)
            }
        // let header = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Authorization': '' });
        return this._httpClient
        .post(`${this.busquedaUrl}/refreshToken`, { token: localStorage.getItem('token') }).pipe(
            tap((tokens : any) => {
              localStorage.setItem("token", tokens['token']);
            }),
            catchError((error) => {
            //   this.doLogoutUser();
              return of(false);
            })
          );

    }

}