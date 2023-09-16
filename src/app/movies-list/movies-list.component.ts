import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent  implements OnInit {
  @Input() onlyFavorites: boolean = false;
  movies: any = null;
  
  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies()
      .subscribe((movies: any) => {
        if (this.onlyFavorites) {
          this.movies = movies.filter((m: any) => m.favorite)
        } else {
          this.movies = movies;
        }
      });
  }

  goToDetails(movie: any) {
    this.movieService.setMovieDetails(movie);
  }

}
