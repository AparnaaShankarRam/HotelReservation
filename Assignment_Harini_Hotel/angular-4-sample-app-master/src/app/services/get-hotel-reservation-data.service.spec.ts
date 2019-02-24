import { TestBed, inject } from '@angular/core/testing';

import { GetHotelReservationDataService } from './get-hotel-reservation-data.service';

describe('GetHotelReservationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHotelReservationDataService]
    });
  });

  it('should ...', inject([GetHotelReservationDataService], (service: GetHotelReservationDataService) => {
    expect(service).toBeTruthy();
  }));
});
