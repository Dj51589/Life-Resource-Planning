import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.scss']
})
export class VerticalTabComponent implements OnInit {
  @Input() activeTab;
  @Input() tabList;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onTabClick = new EventEmitter<boolean>();
  constructor(private router: Router) {}

  ngOnInit() {
    this.tabClick(this.tabList[0]);
    this.router.navigateByUrl(this.tabList[0].path);
  }

  tabClick(tabOption) {
    this.activeTab = tabOption;
    this.onTabClick.emit(tabOption);
  }
}
