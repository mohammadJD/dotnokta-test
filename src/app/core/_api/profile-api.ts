import {Injectable} from '@angular/core';
import {BaseApiUrl} from '../_config/base-url';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileApi {

  private _jsonURL = 'assets/data/landscapes.json';
  url:string = BaseApiUrl + '/brands';

  constructor(
    private http: HttpClient,
  ) {
  }

  get():Observable<any> {
    return this.http.get(this._jsonURL)
  }

}
