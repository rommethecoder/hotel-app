import { Reservation } from './../models/reservation';
import { ReservationService } from './../reservation/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService ){}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
