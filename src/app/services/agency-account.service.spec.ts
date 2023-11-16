import { TestBed } from '@angular/core/testing';

import { AgencyAccountService } from './agency-account.service';

describe('AgencyAccountService', () => {
  let service: AgencyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
