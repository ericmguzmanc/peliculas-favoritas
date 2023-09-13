import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = new Subject<any>();

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://mispeliculas-api.onrender.com/');
  }

  loadMovies() {
    this.getMovies()
      .subscribe((response: any) => {
        console.log('🚀 ~ file: movie.service.ts:21 ~ MovieService ~ .subscribe ~ response:', response)
        if (response) {
          this.movies.next(response.results)
        }
      })
  }
}
