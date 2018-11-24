import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string;
  timer;
  className = 'info';
  constructor() {}

  addMessage(msg, type) {
    this.clearMessage();
    this.message = msg;
    this.className = type || 'info';
    this.timer = setTimeout(() => {
      this.clearMessage();
    }, 2500);
  }

  clearMessage() {
    this.message = null;
    clearTimeout(this.timer);
  }
}
