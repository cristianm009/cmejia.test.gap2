import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PolicyService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getTypeRisk() {
    return this._http.get(this.myAppUrl + 'api/Employee/GetTypeRisk')
      .pipe(map(
        response => {
          return response;
        }));
  }

  getTypeCovering() {
    return this._http.get(this.myAppUrl + 'api/Employee/GetTypeCovering')
      .pipe(map(
        response => {
          return response;
        }));
  }

  getPolicys() {
    return this._http.get(this.myAppUrl + 'api/Policy/Index').pipe(map(
      response => {
        return response;
      }));
  }

  getPolicyById(id: number) {
    return this._http.get(this.myAppUrl + "api/Policy/Details/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  savePolicy(Policy) {
    return this._http.post(this.myAppUrl + 'api/Policy/Create', Policy)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  updatePolicy(Policy) {
    return this._http.put(this.myAppUrl + 'api/Policy/Edit', Policy)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deletePolicy(id) {
    return this._http.delete(this.myAppUrl + "api/Policy/Delete/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
