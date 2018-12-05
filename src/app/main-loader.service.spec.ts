import { TestBed } from '@angular/core/testing';

import { MainLoaderService } from './main-loader.service';

describe('MainLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainLoaderService = TestBed.get(MainLoaderService);
    expect(service).toBeTruthy();
  });
});
