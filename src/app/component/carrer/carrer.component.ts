import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './../../userprofile.service';
@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {
  constructor(public userService: UserProfileService) {}

  ngOnInit() {}
}
