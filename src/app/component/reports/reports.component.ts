import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
