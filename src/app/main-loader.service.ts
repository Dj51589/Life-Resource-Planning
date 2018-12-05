import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainLoaderService {
  isLoaderOn;
  constructor() {}

  showLoader() {
    this.isLoaderOn = true;
  }

  hideLoader() {
    this.isLoaderOn = false;
  }
}
