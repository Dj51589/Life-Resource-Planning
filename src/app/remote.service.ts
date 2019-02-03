import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  SERVER_URL = environment.port;
  constructor(private http: HttpClient) {}

  getCall(url) {
    return this.http.get(this.SERVER_URL + url);
  }
}
