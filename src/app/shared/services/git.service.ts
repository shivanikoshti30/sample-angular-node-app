import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "https://api.github.com/users";

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl)
      .pipe(
        tap(user => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }
  
  getUserRepos(uname: string): Observable<any> {
    const url = `${apiUrl}/${uname}/repos`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched user id=${uname}`)),
      catchError(this.handleError<any>(`getUser uname=${uname}`))
    );
  }

  /**
   * @name: handleError
   * @description handles server side error
   * @param operation 
   * @param result 
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
   // log to console
      console.error(error);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
