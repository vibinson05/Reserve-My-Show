import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   // User details (example data)
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    gender: 'male',
    country: 'USA',
    city: 'New York',
    age: 30,
    recentProject: 'Crypto Price Tracker',
    mostViewedProject: 'Movie Booking System',
  };

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  isEditing = false;
  isChangingPassword: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {
    // You can load user data here if needed
  }

  enableEdit() {
    this.isEditing = true;
  }

  updateInfo() {
    this.isEditing = false;
    console.log('User Info Updated:', this.user);
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/home']);
  }

  showChangePasswordForm() {
    this.isChangingPassword = true;
  }

  // Method to handle password change logic
  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    // Directly call the authService to handle password change
    this.authService.changePassword(this.oldPassword, this.newPassword);

    // Hide the form after submitting the change
    this.isChangingPassword = false;
  }
}