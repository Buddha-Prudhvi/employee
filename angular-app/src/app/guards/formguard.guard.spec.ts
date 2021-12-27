import { TestBed } from '@angular/core/testing';

import { FormguardGuard } from './formguard.guard';

describe('FormguardGuard', () => {
  let guard: FormguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
