/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleGeocodingService } from './google-geocoding.service';

describe('GoogleGeocodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleGeocodingService]
    });
  });

  it('should ...', inject([GoogleGeocodingService], (service: GoogleGeocodingService) => {
    expect(service).toBeTruthy();
  }));
});
