import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatepetComponent } from './addupdatepet.component';

describe('AddupdatepetComponent', () => {
  let component: AddupdatepetComponent;
  let fixture: ComponentFixture<AddupdatepetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddupdatepetComponent]
    });
    fixture = TestBed.createComponent(AddupdatepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
