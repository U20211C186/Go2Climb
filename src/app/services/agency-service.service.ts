import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,  retry,  throwError, catchError } from 'rxjs';
import { agency } from '../models/agency';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  basePath : string = 'http://localhost:8080/agencies'
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

  getAgencies(): Observable<agency[]> {
    return this.http.get<agency[]>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getAgencybyId(id: number): Observable<agency> {
    return this.http.get<agency>(`${this.basePath}/${id}`,this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
}



