import { TestBed } from '@angular/core/testing';

import { VhapService } from './vhap.service';

describe('VhapService', () => {
  let service: VhapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VhapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
