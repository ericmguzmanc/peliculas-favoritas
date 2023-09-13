import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent  implements OnInit {
  movies: any = null;
  
  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.movies.subscribe(result => {
      this.movies = result;
    });
  }

  goToDetails() {
    this.router.navigate(['/movie-details'])
  }

}
