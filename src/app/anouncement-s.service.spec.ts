import { TestBed } from '@angular/core/testing';

import { AnouncementSService } from './anouncement-s.service';

describe('AnouncementSService', () => {
  let service: AnouncementSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnouncementSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
