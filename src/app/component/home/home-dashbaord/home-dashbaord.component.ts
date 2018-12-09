import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth.service';

@Component({
  selector: 'app-home-dashbaord',
  templateUrl: './home-dashbaord.component.html',
  styleUrls: ['./home-dashbaord.component.scss']
})
export class HomeDashbaordComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
