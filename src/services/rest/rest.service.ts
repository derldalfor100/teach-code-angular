import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getRequestAsync(url: string, headers: {[k: string]: string}, params: {[k: string]: string}): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.get(url, { headers, params })
      .pipe(timeout(5000),
      catchError((e: HttpErrorResponse) => {
        return [{ errorMessageFromRestApi: `Get Request Timeout. ${e.message}`}];
      })).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject({ errorMessageFromRestApi: `Get Request Error. ${error?.message}`});
        });
    });
  }

  postRequestAsync(url: string, headers: {[k: string]: string}, params: {[k: string]: string}, body: {[k: string]: string}): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.post(url, body, { headers, params })
      .pipe(timeout(5000),
      catchError((e: HttpErrorResponse) => {
        return [{ errorMessageFromRestApi: `Post Request Timeout. ${e.message}`}];
      })).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject({ errorMessageFromRestApi: `Post Request Error. ${error?.message}`});
        });
    });
  }

  putRequestAsync(url: string, headers: {[k: string]: string}, params: {[k: string]: string}, body: {[k: string]: string}): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.put(url, body, { headers, params })
      .pipe(timeout(5000),
      catchError((e: HttpErrorResponse) => {
        return [{ errorMessageFromRestApi: `Put Request Timeout. ${e.message}`}];
      })).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject({ errorMessageFromRestApi: `Put Request Error. ${error?.message}`});
        });
    });
  }

  deleteRequestAsync(url: string, headers: {[k: string]: string}, params: {[k: string]: string}): Promise<any> {

    return new Promise((resolve, reject) => {

      this.http.delete(url, { headers, params })
      .pipe(timeout(5000),
      catchError((e: HttpErrorResponse) => {
        return [{ errorMessageFromRestApi: `Delete Request Timeout. ${e.message}`}];
      })).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject({ errorMessageFromRestApi: `Delete Request Error. ${error?.message}`});
        });
    });
  }
}
