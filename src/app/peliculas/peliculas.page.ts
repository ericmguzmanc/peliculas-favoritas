import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  movies: number[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.loadMovies();
  }

}
