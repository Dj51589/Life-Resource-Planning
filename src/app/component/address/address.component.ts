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

const ELEMENT_DATA = [
  {
    name: 'Bharagav',
    image:
      'http://atozprofile.com/public/user_upload/profile/1843663324Self.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      },
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Junje Gowd  Konappapalyam Chinna',
    image:
      'http://atozprofile.com/public/generic_upload/family/1559144679Lokesh.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      },
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Pavan Kumar  Konappapalyam',
    image:
      'http://atozprofile.com/public/generic_upload/family/1690440524Pavan.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Chitra  Ranganath',
    image:
      'http://atozprofile.com/public/generic_upload/family/1682696996Chitra.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Hemalatha  V.N',
    image:
      'http://atozprofile.com/public/generic_upload/family/1936566325Hema.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Swetha  Lokesh',
    image:
      'http://atozprofile.com/public/generic_upload/family/313985000Swetha.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  },
  {
    name: 'Aarushi  Alappagari',
    image:
      'http://atozprofile.com/public/generic_upload/family/375460906Aarushi.png',
    addresses: [
      {
        type: 'Personal Address',
        street: '5-1-4/123, D R COLONY',
        state: 'Andhra Pradesh, India'
      },
      {
        type: 'Office Address',
        street: '12213, Banglore',
        state: 'India'
      },
      {
        type: 'Temporary Address',
        street: 'b-101, sector 5',
        state: 'Noida'
      }
    ]
  }
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

  dataSource = ELEMENT_DATA;

  constructor(
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
