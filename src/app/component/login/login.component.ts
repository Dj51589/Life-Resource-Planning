import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import * as _ from 'lodash';
import { MessageService } from './../../message.service';
import { UserProfileService } from './../../userprofile.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private userService: UserProfileService
  ) {}
  user: User = {
    name: ''
  };
  ngOnInit() {}

  onLogin() {
    if (!_.get(this.user, 'name')) {
      this.messageService.addMessage('Enter Username', 'danger');
    } else if (!_.get(this, 'password')) {
      this.messageService.addMessage('Enter Password', 'danger');
    } else if (_.get(this, 'password') !== '123') {
      this.messageService.addMessage('Enter Correct Password', 'danger');
    } else {
      this.messageService.addMessage('Login Successfuly.', 'success');
      this.userService.setUserDetail(this.user);
      this.router.navigateByUrl('/generalInfo');
    }
  }

  onSignUp() {}
}
