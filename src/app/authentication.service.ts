import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUserSubject = new BehaviorSubject<string | null>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUserSubject.next(storedUser);
    }
  }

  // Signup Method (Stores user locally)
  signup(name: string, email: string, password: string): void {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }

  // Login Method (Checks locally stored user)
  login(email: string, password: string): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        this.loggedInUserSubject.next(email);
        localStorage.setItem('loggedInUser', email);
        alert('Login successful!');
        this.router.navigate(['/movie-list']);
        return;
      }
    }
    alert('Invalid email or password!');
  }

  // Logout Method (Removes session)
  logout(): void {
    this.loggedInUserSubject.next(null);
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    this.router.navigate(['/login']);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.loggedInUserSubject.value !== null;
  }

  
  changePassword(oldPassword: string, newPassword: string): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('User not found!');
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== oldPassword) {
      alert('Incorrect old password!');
      return;
    }

    user.password = newPassword;
    localStorage.setItem('user', JSON.stringify(user)); 
    alert('Password changed successfully!');
  }
}