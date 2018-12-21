import { TestBed } from '@angular/core/testing';

import { CityToZipService } from './city-to-zip.service';

describe('CityToZipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityToZipService = TestBed.get(CityToZipService);
    expect(service).toBeTruthy();
  });
});
