import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';

@Injectable()
export class FavoritesResolver {
  
  constructor(private http: HttpClient, private movieService: MovieService) { }

  resolve () {
    return this.http.get(`http://localhost:3005/favoritos`)
      .pipe(
        map((movies: any) => {
          if (movies) {
            return movies.map((movie: any) => movie.id);
          }
        }),
        tap((result) => this.movieService.setFavorites(result)),
      );
  }
}
