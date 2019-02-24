import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetHotelReservationDataService {

  private serviceUrl = '/assets/mock-data.json';

  constructor(private http: HttpClient) { }

  getDetails(): Observable<any> {
    return this.http.get<any>(this.serviceUrl);
  }

}

