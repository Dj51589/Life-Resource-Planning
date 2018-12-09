import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { Router } from '@angular/router';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    name: null
  };
  redirectUrl;
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

  isLoggedIn() {
    this.getUserDetail();
    return !_.isNull(_.get(this.user, 'name', null));
  }

  resetUserDetail() {
    this.user = {
      name: null
    };
  }

  logout() {
    this.user = {
      name: null
    };
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
