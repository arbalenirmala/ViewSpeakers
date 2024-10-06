import { TestBed } from '@angular/core/testing';
import { SpeakerListService } from './speaker-list.service';

describe('SpeakerListService', () => {
  let service: SpeakerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
