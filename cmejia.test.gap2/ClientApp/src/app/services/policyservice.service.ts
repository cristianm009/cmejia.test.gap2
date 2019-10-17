import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Policy } from '../../models/policy';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getTypeRisk() {
    return this._http.get(this.myAppUrl + 'api/Policy/GetTypeRisk')
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getTypeCovering() {
    return this._http.get(this.myAppUrl + 'api/Policy/GetTypeCovering')
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getPolicys() {
    return this._http.get(this.myAppUrl + 'api/Policy/Index')
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  getPolicyById(id: number) {
    return this._http.get(this.myAppUrl + "api/Policy/Details/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  savePolicy(policy: Policy) {
    return this._http.post(this.myAppUrl + 'api/Policy/Create', policy)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  updatePolicy(policy: Policy) {
    return this._http.put(this.myAppUrl + 'api/Policy/Edit', policy)
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
