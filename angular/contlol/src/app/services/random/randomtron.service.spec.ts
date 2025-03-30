import { TestBed } from '@angular/core/testing';

import { RandomtronService } from './randomtron.service';

describe('RandomtronService', () => {
  let service: RandomtronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomtronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
