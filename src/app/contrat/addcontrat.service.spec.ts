import { TestBed } from '@angular/core/testing';

import { AddcontratService } from './addcontrat.service';

describe('AddcontratService', () => {
  let service: AddcontratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcontratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
