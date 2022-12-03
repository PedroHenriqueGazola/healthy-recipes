import { TestBed } from '@angular/core/testing';

import { RandonRecipesService } from './randon-recipes.service';

describe('RandonRecipesService', () => {
  let service: RandonRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandonRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
