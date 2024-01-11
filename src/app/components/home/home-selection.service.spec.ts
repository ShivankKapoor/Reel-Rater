import { TestBed } from '@angular/core/testing';

import { HomeSelectionService } from './home-selection.service';

describe('HomeSelectionService', () => {
  let service: HomeSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
