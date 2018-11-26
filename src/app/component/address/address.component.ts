import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  myControl = new FormControl();
  validFrom = new FormControl(new Date());
  options: string[] = ['Home Address', 'Office Address', 'Native Town Address'];
  filteredOptions: Observable<string[]>;
  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  btnClick() {
    debugger;
    // this.validFrom;
    // this.addressType;
    // this.housenumber;
  }
}
