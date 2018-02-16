import { TestBed, inject } from '@angular/core/testing';

import { ValidatorServiceService } from './validator-service.service';

describe('ValidatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorServiceService]
    });
  });

  it('should be created', inject([ValidatorServiceService], (service: ValidatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
