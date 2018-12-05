import { Component, OnInit } from '@angular/core';
import { MainLoaderService } from './../../main-loader.service';

@Component({
  selector: 'app-main-loader',
  templateUrl: './main-loader.component.html',
  styleUrls: ['./main-loader.component.scss']
})
export class MainLoaderComponent implements OnInit {
  constructor(public loaderService: MainLoaderService) {}

  ngOnInit() {}
}
