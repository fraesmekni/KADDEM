import { TestBed } from '@angular/core/testing';

import { DeletecontratService } from './deletecontrat.service';

describe('DeletecontratService', () => {
  let service: DeletecontratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecontratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
