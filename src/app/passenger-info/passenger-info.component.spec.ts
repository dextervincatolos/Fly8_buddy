import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInfoComponent } from './passenger-info.component';

describe('PassengerInfoComponent', () => {
  let component: PassengerInfoComponent;
  let fixture: ComponentFixture<PassengerInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerInfoComponent]
    });
    fixture = TestBed.createComponent(PassengerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
