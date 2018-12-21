import { TestBed } from '@angular/core/testing';

import { ZipToAreaService } from './zip-to-area.service';

describe('ZipToAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipToAreaService = TestBed.get(ZipToAreaService);
    expect(service).toBeTruthy();
  });
});
