import { TestBed } from '@angular/core/testing';

import { SougovService } from './sougov.service';

describe('SougovService', () => {
  let service: SougovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SougovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
