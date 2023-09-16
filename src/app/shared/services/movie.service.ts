import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = new Subject<any>();
  movieDetails = new Subject<any>();
  favs: number[] = [];
  api_url = 'https://mispeliculas-api.onrender.com';
  json_server_url = 'http://localhost:3005';
  
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.api_url);
  }

  loadMovies() {
    this.getMovies()
      .pipe(
        map((movies: any) => {
          return movies.map((movie: any) => {
            return {
              ...movie,
              favorite: this.favs.some((fm: any) => fm === movie.id) ? true : false,
            }
          })
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.movies.next(response)
        }
      });
  }

  getAllMovies() {
    return this.http.get(this.api_url)
      .pipe(
        map((movies: any) => {
          return movies.map((movie: any) => {
            return {
              ...movie,
              favorite: this.favs.some((f: any) => f === movie.id)
            }
          })
        }),
      );
  }

  findMovieById(id: any) {
    return this.http.post(`${this.api_url}/buscarpelicula/${id}`, { })
      .pipe(
        map((movie: any) => {
          return {
            ...movie,
            favorite: this.favs.some((f: any) => f === movie.id)
          }
        })
      );
  }

  setMovieDetails(movie: any) {
    this.movieDetails.next(movie);
  }

  addFavoriteMovie(id: number, title: string) {
    return this.http.post(`${this.json_server_url}/favoritos`, { id, title });
  }

  removeFavoriteMovie(id: number) {
    return this.http.delete(`${this.json_server_url}/favoritos/${id}`);
  }

  getFavoriteMovies() {
    return this.http.get(`${this.json_server_url}/favoritos`)
      .pipe(
        map((movies: any) => {
          if (movies) {
            return movies.map((movie: any) => movie.id);
          }
        })
      );
  }

  setFavorites(favs: any) {
    this.favs = favs;
  }
}
