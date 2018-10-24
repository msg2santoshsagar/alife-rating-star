import { TestBed } from '@angular/core/testing';

import { SimpleRatingStarService } from './simple-rating-star.service';

describe('SimpleRatingStarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleRatingStarService = TestBed.get(SimpleRatingStarService);
    expect(service).toBeTruthy();
  });
});
