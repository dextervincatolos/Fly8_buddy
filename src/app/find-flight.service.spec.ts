import { TestBed } from '@angular/core/testing';

import { FindFlightService } from './find-flight.service';

describe('FindFlightService', () => {
  let service: FindFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
