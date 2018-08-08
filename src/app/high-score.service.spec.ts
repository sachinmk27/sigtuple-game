import { TestBed, inject } from '@angular/core/testing';

import { HighScoreService } from './high-score.service';

describe('HighScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighScoreService]
    });
  });

  it('should be created', inject([HighScoreService], (service: HighScoreService) => {
    expect(service).toBeTruthy();
  }));
});
