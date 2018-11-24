import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

  tabClick(tabOption) {
    this.onTabClick.emit(tabOption);
  }
}
