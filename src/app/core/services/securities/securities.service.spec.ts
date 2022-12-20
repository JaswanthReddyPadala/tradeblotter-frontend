import { TestBed } from '@angular/core/testing';

import { SecuritiesService } from './securities.service';

describe('SecuritiesService', () => {
  let service: SecuritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
