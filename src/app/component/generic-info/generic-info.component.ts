import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';
@Component({
  selector: 'app-generic-info',
  templateUrl: './generic-info.component.html',
  styleUrls: ['./generic-info.component.scss']
})
export class GenericInfoComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
