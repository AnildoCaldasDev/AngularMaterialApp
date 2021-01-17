import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCountryLocationComponent } from './usercountrylocation.component';

describe('UserCountryLocationComponent', () => {
  let component: UserCountryLocationComponent;
  let fixture: ComponentFixture<UserCountryLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCountryLocationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCountryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
