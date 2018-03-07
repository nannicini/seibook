import { TestBed, inject } from '@angular/core/testing';

import { BrancaService } from './branca.service';

describe('BrancaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrancaService]
    });
  });

  it('should be created', inject([BrancaService], (service: BrancaService) => {
    expect(service).toBeTruthy();
  }));
});
