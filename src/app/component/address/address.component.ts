import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MainLoaderService } from './../../main-loader.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  resetVar = true;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.pdf,.docx,.txt,.gif,.jpeg',
    maxSize: '20',
    uploadAPI: {
      url: 'https://example-file-upload-api',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    },
    // theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false
  };
  address_validation_messages = {
    validFrom: [{ type: 'required', message: 'ValidFrom is required' }],
    validTo: [{ type: 'required', message: 'ValidTo is required' }],
    addressTypeControl: [
      { type: 'required', message: 'Type of address is required' }
    ],
    housenumber: [{ type: 'required', message: 'House number is required' }],
    country: [{ type: 'required', message: 'Country is required' }],
    postalCode: [{ type: 'required', message: 'Postal code is required' }]
  };
  address_form = this.fb.group({
    validFrom: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    validTo: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    addressTypeControl: new FormControl('', {
      validators: Validators.required
    }),
    housenumber: new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    street: new FormControl(''),
    addressline2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    postalCode: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    addressproofDocType: new FormControl(),
    addressProofDoc: new FormControl()
  });

  // });
  options: string[] = ['Home Address', 'Office Address', 'Native Town Address'];
  filteredOptions: Observable<string[]>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private fb: FormBuilder,
    private loaderService: MainLoaderService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.filteredOptions = this.address_form.controls.addressTypeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  DocUpload() {}

  btnClick() {
    this.loaderService.showLoader();
    this.loaderService.hideLoader();
    // this.validFrom.value;
    // this.validTo.value;
    // this.addressType;
    // this.addressTypeControl.value;
    // this.housenumber;
  }
}
