import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, Subject, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
temp:any='1';
  constructor(  private http: HttpClient,) {
    console.log('a')
   }
tempfn(data:any){
  this.temp=data;

  console.log(this.temp)
}
  getData(): Observable<any> {
    let url = `https://hyundai-812bb-default-rtdb.firebaseio.com/user.json`;
    //return this.http.get(url);

    return this.http.get(url);
  }
  loginData(body: any): Observable<any> {
    let url = `https://hyundai-812bb-default-rtdb.firebaseio.com/login.json`;
    return this.http.post(url, body);
  }
  saveData(body: any): Observable<any> {
    let url = `https://hyundai-812bb-default-rtdb.firebaseio.com/user.json`;
    return this.http.post(url, body);
  }
  updateData(body: any,id:any): Observable<any> {
    let url = `https://hyundai-812bb-default-rtdb.firebaseio.com/user/${id}.json`;
    return this.http.put(url, body);
  }

  deleteData( id:any): Observable<any> {
    let url = ` https://hyundai-812bb-default-rtdb.firebaseio.com/user/${id}.json`;
    return this.http.delete(url);
  }
}
