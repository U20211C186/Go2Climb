import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, retry, catchError } from 'rxjs';
import { agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class HiredServiceService {

  basePath : string = 'http://localhost:8080/api/v1/hired-services'
  httpOptions : {headers:HttpHeaders} ={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse):Observable<never> {
    if (error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    //Return Observable with Error MEssage to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getHiredServices(): Observable<any> {
    return this.http.get<any>(`${this.basePath}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
