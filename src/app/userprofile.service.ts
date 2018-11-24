import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user: User = {
    name: ''
  };
  constructor(private router: Router) {
    this.getUserDetail();
  }

  setUserDetail(user) {
    this.user.name = user.name;
    localStorage.setItem('userProfile', JSON.stringify(this.user));
  }

  getUserDetail() {
    const profile = JSON.parse(localStorage.getItem('userProfile'));
    if (profile) {
      this.user = profile;
    }
  }

  resetUserDetail() {
    this.user = {
      name: null
    };
  }

  logout() {
    this.user = {
      name: ''
    };
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
