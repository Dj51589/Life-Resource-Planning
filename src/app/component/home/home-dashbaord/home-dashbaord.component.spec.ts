import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashbaordComponent } from './home-dashbaord.component';

describe('HomeDashbaordComponent', () => {
  let component: HomeDashbaordComponent;
  let fixture: ComponentFixture<HomeDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
