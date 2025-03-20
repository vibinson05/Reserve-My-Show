import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ViewMovieDetailsComponent } from './components/view-movie-details/view-movie-details.component';


const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "movie-list", component: MovieListComponent },
    { path: 'movie-list/:id', component: MovieListComponent }, 
    {path:"viewmovies",component:ViewMovieDetailsComponent},
    { path: "viewMovies/:id", component: ViewMovieDetailsComponent },
    { path: "login", component: LoginComponent},
    { path: "signup",component: SignupComponent},
    { path: "tickets",component: TicketsComponent},
    { path: 'tickets/:time', component: TicketsComponent },
    {path: 'home',component: HomeComponent},
    {path: 'profile',component: ProfileComponent},
   { path: 'tickets/:id',component: TicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
