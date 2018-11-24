import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
  }
}
