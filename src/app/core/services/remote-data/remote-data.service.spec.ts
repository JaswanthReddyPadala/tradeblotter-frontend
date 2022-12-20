import { TestBed } from '@angular/core/testing';

import { RemoteDataService } from './remote-data.service';

describe('RemoteDataService', () => {
  let service: RemoteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
