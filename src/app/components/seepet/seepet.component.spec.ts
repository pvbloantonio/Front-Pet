import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeepetComponent } from './seepet.component';

describe('SeepetComponent', () => {
  let component: SeepetComponent;
  let fixture: ComponentFixture<SeepetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeepetComponent]
    });
    fixture = TestBed.createComponent(SeepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
