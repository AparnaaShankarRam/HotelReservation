import { Component, OnInit } from '@angular/core';
import { GetHotelReservationDataService } from '../services/get-hotel-reservation-data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [GetHotelReservationDataService]
})
export class CitiesComponent implements OnInit {
  reservationData: any;
  tableHead: any;

  constructor(private fetchDetails: GetHotelReservationDataService) { }

  ngOnInit() {
    console.log("Inside City Component");
    this.getReservationDetails();
    this.tableHead = new Array<String>('Guest ID', 'Guest Name', 'Hotel Name', 'Reservation Number');
  }

  getReservationDetails() {
    this.fetchDetails.getDetails().subscribe(serverData => {
      console.log("Fetched Data", serverData);
      this.setReservationData(serverData);
    });
  }

  setReservationData(data) {
    this.reservationData = data;
  }

}
