import { TestBed } from '@angular/core/testing';

import { RedoLoginGuardService } from './redo-login-guard.service';

describe('RedoLoginGuardService', () => {
  let service: RedoLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedoLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
