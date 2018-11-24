import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
