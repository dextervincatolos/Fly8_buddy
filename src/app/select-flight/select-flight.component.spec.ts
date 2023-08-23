import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlightComponent } from './select-flight.component';

describe('SelectFlightComponent', () => {
  let component: SelectFlightComponent;
  let fixture: ComponentFixture<SelectFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFlightComponent]
    });
    fixture = TestBed.createComponent(SelectFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
