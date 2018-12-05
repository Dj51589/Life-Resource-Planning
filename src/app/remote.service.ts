import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private http: HttpClient) {}

  getCall(url) {
    return this.http.get(url);
  }
}
