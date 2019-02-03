import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import * as _ from 'lodash';
import { MessageService } from './../../message.service';
import { AuthService } from './../../auth.service';
import { RemoteService } from './../../remote.service';
import { MainLoaderService } from './../../main-loader.service';
import { from } from 'rxjs';
import { URL } from './../../classes/constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private remoteService: RemoteService,
    private loaderService: MainLoaderService
  ) {}
  user = {};
  ngOnInit() {}

  onLogin() {
    if (!_.get(this.user, 'name')) {
      this.messageService.addMessage('Enter Username', 'danger');
    } else if (!_.get(this, 'password')) {
      this.messageService.addMessage('Enter Password', 'danger');
    } else {
      this.loaderService.showLoader();
      const url = URL.addressType;
      this.loaderService.hideLoader();
      this.authService.setUserDetail(this.user);
      this.messageService.addMessage('Login Successfuly.', 'success');
      this.router.navigate(['/']);

      // this.remoteService.getCall(url).subscribe(
      //   data => {
      //     this.loaderService.hideLoader();
      //     this.authService.setUserDetail(data);
      //     this.messageService.addMessage('Login Successfuly.', 'success');
      //     this.router.navigateByUrl('/generalInfo');
      //   },
      //   error => {
      //     this.loaderService.hideLoader();
      //     this.messageService.addMessage('Login Error Occured.', 'warning');
      //   }
      // );
    }
  }

  validateLogin() {}

  onSignUp() {}
}
