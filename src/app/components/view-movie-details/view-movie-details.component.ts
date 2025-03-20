import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-movie-details',
  templateUrl: './view-movie-details.component.html',
  styleUrls: ['./view-movie-details.component.css']
})
export class ViewMovieDetailsComponent implements OnInit{
  movieListarray: any[] = [];

  constructor(private service: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieListarray = this.service.AllMovies; // Fetch movie list from service
  }

  buyTicket(time: string, movieName: string) {
    // Navigate to the ticket booking page with selected movie name and time
    this.router.navigate(['/tickets', { movie: movieName, time: time }]);
  }
}
