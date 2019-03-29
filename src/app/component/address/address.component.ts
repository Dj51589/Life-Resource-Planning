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
import { RemoteService } from '../../../app/remote.service';

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
    // theme: 'dragNDrop',
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
  dataSource;
  constructor(
    private remoteService: RemoteService,
    private fb: FormBuilder,
    private loaderService: MainLoaderService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.filteredOptions = this.address_form.controls.addressTypeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.remoteService.getCall('/addresses')
      .subscribe((data) => {
        debugger;
        this.dataSource = data;
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  DocUpload() { }

  btnClick() {
    this.loaderService.showLoader();
    this.loaderService.hideLoader();
    // this.validFrom.value;
    // this.validTo.value;
    // this.addressType;
    // this.addressTypeControl.value;
    // this.housenumber;
  }

  showHideIcon(obj, status) {
    debugger;
    obj.mouseEntered = status;
  }
}
