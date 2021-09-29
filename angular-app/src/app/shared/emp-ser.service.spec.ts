import { TestBed } from '@angular/core/testing';

import { EmpSerService } from './emp-ser.service';

describe('EmpSerService', () => {
  let service: EmpSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
