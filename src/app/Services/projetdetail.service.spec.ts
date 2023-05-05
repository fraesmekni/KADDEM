import { TestBed } from '@angular/core/testing';

import { ProjetdetailService } from './projetdetail.service';

describe('ProjetdetailService', () => {
  let service: ProjetdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
