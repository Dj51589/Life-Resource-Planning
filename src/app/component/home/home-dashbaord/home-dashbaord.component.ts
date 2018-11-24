import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../../userprofile.service';

@Component({
  selector: 'app-home-dashbaord',
  templateUrl: './home-dashbaord.component.html',
  styleUrls: ['./home-dashbaord.component.scss']
})
export class HomeDashbaordComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
