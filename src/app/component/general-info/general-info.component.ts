import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';
@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
