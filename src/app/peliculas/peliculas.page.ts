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
    console.log('🚀 ~ file: peliculas.page.ts:17 ~ PeliculasPage ~ setTimeout ~ this.movies:', this.movies)
    // setTimeout(() => {
    //   this.movies = [1, 2, 3];
    //   console.log('🚀 ~ file: peliculas.page.ts:17 ~ after timeout', this.movies)
    // }, 5000)

    this.movieService.loadMovies();
  }

}
