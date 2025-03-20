import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  

  constructor(private router: Router ) {
   
  }
  
  seatCategories = [
    { name: 'Normal', price: ' ₹ 160'  }
  ];

  // Set all seats to 'available'
  seats: any[][] = [
    ['available', 'available', 'available', 'available', 'available','available','available','available'],
    ['available', 'available', 'available', 'available', 'available','available','available','available'],
    ['available', 'available', 'available', 'available', 'available', 'available','available','available'],
    ['available', 'available', 'available', 'available', 'available', 'available','available','available'],
    ['available', 'available', 'available', 'available', 'available', 'available','available','available'],
    ['available', 'available', 'available', 'available', 'available', 'available','available','available'],
    ['available', 'available', 'available', 'available', 'available', 'available','available','available']
  ];

  selectedSeats: { seatNumber: number, price: string }[] = [];
  numPeople: number = 1;
  showPopup: boolean = true;
  showConfirmPopup: boolean = false;

  // Toggle seat selection
  toggleSeat(row: number, col: number) {
    if (this.seats[row][col] === 'sold') return;

    const seatNumber = row * this.seats[row].length + col + 1; // Calculate seat number
    const seatIndex = this.selectedSeats.findIndex(seat => seat.seatNumber === seatNumber);
    
    if (seatIndex > -1) {
      this.selectedSeats.splice(seatIndex, 1);
      this.seats[row][col] = 'available';
    } else {
      if (this.selectedSeats.length < this.numPeople) {
        this.selectedSeats.push({ seatNumber, price: this.seatCategories[0].price });
        this.seats[row][col] = 'selected';
      }
    }
  }

  // Proceed to seat selection
  proceedToSeatSelection() {
    if (this.numPeople > 0) this.showPopup = false;
  }

  // Show the confirmation modal
  showConfirmation() {
    this.showConfirmPopup = true;
  }

  // Confirm booking
  confirmBooking() {
    this.showConfirmPopup = false;
    alert(`Booking confirmed! Seats: ${JSON.stringify(this.selectedSeats)}`);
    this.selectedSeats = [];
    this.showPopup = true;
    this.router.navigate(['/home']);
  }

  // Cancel the confirmation
  cancelBooking() {
    this.showConfirmPopup = false;
    this.selectedSeats = [];
    this.router.navigate(['/home']);
  }



  

}


