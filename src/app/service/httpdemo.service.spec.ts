import { TestBed } from '@angular/core/testing';

import { HttpdemoService } from './httpdemo.service';

describe('HttpdemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpdemoService = TestBed.get(HttpdemoService);
    expect(service).toBeTruthy();
  });
});
