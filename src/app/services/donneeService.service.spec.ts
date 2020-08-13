/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DonneeServiceService } from './donneeService.service';

describe('Service: DonneeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonneeServiceService]
    });
  });

  it('should ...', inject([DonneeServiceService], (service: DonneeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
