import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isMenuOpen = false;
  isLoggedIn = false; // Declare isLoggedIn
  searchTerm: string = '';
  filteredMovies: any[] = [];


  constructor(private authService: AuthenticationService,private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    // Subscribe to authentication changes
    this.authService.loggedInUser$.subscribe((user) => {
      this.isLoggedIn = !!user; // Update isLoggedIn based on user presence
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout(); // Call the logout method from AuthenticationService
  }

  searchMovies() {
    if (this.searchTerm.trim() === '') {
      this.filteredMovies = [];
      return;
    }
    this.filteredMovies = this.movieService.AllMovies.filter(movie =>
      movie.movieName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToMovie(id: number) {
    this.filteredMovies = [];
    this.searchTerm = '';
    this.router.navigate(['/login']);
  }
}
