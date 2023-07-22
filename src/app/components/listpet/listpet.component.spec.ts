import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpetComponent } from './listpet.component';

describe('ListpetComponent', () => {
  let component: ListpetComponent;
  let fixture: ComponentFixture<ListpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpetComponent]
    });
    fixture = TestBed.createComponent(ListpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
