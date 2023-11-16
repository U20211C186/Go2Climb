import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { AgencyServiceService } from './agency-service.service';

describe('AgencyServiceService', () => {
  let service: AgencyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
