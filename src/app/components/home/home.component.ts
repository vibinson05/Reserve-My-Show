import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// Movies array
movies = [
  { title: 'Ponnin Selvan-2', image: '../../assets/ps-2.jpg' },
  { title: 'Master', image: '../../assets/Master.png' },
  { title: 'Kaithi', image: '../../assets/Kaithi.jpeg' },
  { title: 'Don', image: '../../assets/Don.jpeg' },
  { title: 'Amaran', image: '../../assets/Amaran.png' },
  { title: 'Goat', image: '../../assets/Goat.jpeg' },
  { title: 'Leo', image: '../../assets/Leo.jpeg' },
  { title: 'Varisu', image: '../../assets/Varisu.jpg' },
  { title: 'Vikram', image: '../../assets/vikram.jpeg' },
  { title: 'The-Innocent', image: '../../assets/The-Innocent.jpeg' },
  { title: 'The Last Warrior_ Root of Evil', image: '../../assets/The Last Warrior_ Root of Evil.jpeg' }
];


carousel: HTMLElement | null = null;

constructor(private router: Router) {} 

scrollLeft(): void {
  if (this.carousel) {
    this.carousel.scrollBy({
      left: -150, 
      behavior: 'smooth'
    });
  }
}

scrollRight(): void {
  if (this.carousel) {
    this.carousel.scrollBy({
      left: 150, 
      behavior: 'smooth'
    });
  }
}


ngAfterViewInit(): void {
  this.carousel = document.querySelector('.carousel');
}

navigateToTrailer(): void{
  const youtubeTrailerUrl= 'https://youtu.be/hylIXfZeB4c?si=QQ-dNRyo2dkF3OEH';
  window.open(youtubeTrailerUrl, '_blank');
}

navigateToBookNow(): void {
  this.router.navigate(['/login']);  
}

}
