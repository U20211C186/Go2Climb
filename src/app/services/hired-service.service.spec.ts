import { TestBed } from '@angular/core/testing';

import { HiredServiceService } from './hired-service.service';

describe('HiredServiceService', () => {
  let service: HiredServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiredServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
