import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movieList: string[] = ["movie1", "movie2", "movie3", "movie4"];

  movieListarray: any[] = []

  constructor(
    private router: Router,
    private service: MovieService) {
    this.movieListarray = service.AllMovies;

  }
  goToViewMovies(id: number): void {
    this.router.navigate(['viewMovies/' + id]);
  }
}
