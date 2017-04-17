import { TestBed, inject } from '@angular/core/testing';

import { MapMyRydeService } from './map-my-ryde.service';

describe('MapMyRydeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapMyRydeService]
    });
  });

  it('should ...', inject([MapMyRydeService], (service: MapMyRydeService) => {
    expect(service).toBeTruthy();
  }));
});
