import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  
  AllMovies: any[] = [
    { 
      id: 1, 
      movieName: "Kaithi", 
      director: "Lokesh Kanagaraj", 
      actor: "Karthi", 
      imageUrl: "../../assets/Kaithi.jpeg", 
      description: "A police officer and a convict work together to stop a drug cartel.", 
      genre: "Action, Thriller", 
      releaseYear: 2019 
    },
    { 
      id: 2, 
      movieName: "Vikram", 
      director: "Lokesh Kanagaraj", 
      actor: "Kamal Haasan", 
      imageUrl: "../../assets/vikram.jpeg", 
      description: "A retired cop embarks on a mission to find a missing man.", 
      genre: "Action, Crime", 
      releaseYear: 2022 
    },
    { 
      id: 3, 
      movieName: "Master", 
      director: "Lokesh Kanagaraj", 
      actor: "Vijay", 
      imageUrl: "../../assets/Master.png", 
      description: "A professor and a criminal mastermind face off in a battle of wits.", 
      genre: "Action, Thriller", 
      releaseYear: 2021 
    },
    { 
      id: 4, 
      movieName: "Ponniyin Selvan-2", 
      director: "Mani Ratnam", 
      actor: "Vikram", 
      imageUrl: "../../assets/ps-2.jpg", 
      description: "The second part of a historical drama based on the Tamil novel Ponniyin Selvan.", 
      genre: "Historical, Drama", 
      releaseYear: 2022 
    },
    { 
      id: 5, 
      movieName: "Amaran", 
      director: "Rajkumar Periaswamy", 
      actor: "Sivakarthikeyan", 
      imageUrl: "../../assets/Amaran.png", 
      description: "A young man fights against a political system to bring justice.", 
      genre: "Action, Drama", 
      releaseYear: 2023 
    },
    { 
      id: 6, 
      movieName: "Goat", 
      director: "Venkat Prabhu", 
      actor: "Vijay", 
      imageUrl: "../../assets/Goat.jpeg", 
      description: "A thriller based on a mysterious series of events in a small village.", 
      genre: "Thriller, Mystery", 
      releaseYear: 2022 
    },
    { 
      id: 7, 
      movieName: "Leo", 
      director: "Lokesh Kanagaraj", 
      actor: "Vijay", 
      imageUrl: "../../assets/Leo.jpeg", 
      description: "A mysterious man with a hidden past faces a dangerous criminal underworld.", 
      genre: "Action, Thriller", 
      releaseYear: 2024 
    },
    { 
      id: 8, 
      movieName: "Don", 
      director: "Cibi Chakaravarthi", 
      actor: "Sivakarthikeyan", 
      imageUrl: "../../assets/Don.jpeg", 
      description: "A young man takes on a leadership role in a college society while facing numerous challenges.", 
      genre: "Comedy, Drama", 
      releaseYear: 2022 
    },
    { 
      id: 9, 
      movieName: "Varisu", 
      director: "Vamshi Paidipally", 
      actor: "Vijay", 
      imageUrl: "../../assets/Varisu.jpg", 
      description: "A man discovers the family secrets and fights for justice in his family's estate.", 
      genre: "Drama, Family", 
      releaseYear: 2023 
    }
  ]

  findMovieById(id: number | any): any[] {
    return this.AllMovies.filter(movie => movie.id === parseInt(id));
  }



}
