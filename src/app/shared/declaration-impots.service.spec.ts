import { TestBed } from '@angular/core/testing';

import { DeclarationImpotsService } from './declaration-impots.service';

describe('DeclarationImpotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationImpotsService = TestBed.get(DeclarationImpotsService);
    expect(service).toBeTruthy();
  });
});
