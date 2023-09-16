import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any = null;
  isAlertOpen = false;

  favoriteButton = 'Agregar a Favoritas';
  favoriteButtonFill = 'outline';
  favoriteButtonIcon = 'star-outline';
  favoriteButtonColor = 'medium';

  alertButtons = ['OK'];
  alertObject = {
    header: '',
    subHeader: '',
    message: '',
  }

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService,
    private location: Location,
  ) { }

  ngOnInit() { 
    this.movieService.movieDetails.subscribe(details => {
      this.movie = details;
    });

    this.route.params.subscribe(params => {
      if (params) {
        this.movieService.findMovieById(params['id']).subscribe((movie) => {
          this.movie = movie;
          if (this.movie.favorite) {
            this.favoriteButton = 'Remover de Favoritas';
            this.favoriteButtonFill = 'solid';
            this.favoriteButtonIcon = 'star';
            this.favoriteButtonColor = 'danger';
          }
        });
      }

    });
  }

  toggleFavorite(movie: any) {
    if (this.movie.favorite) {
      this.removeFromFavorites(movie);
    } else {
      this.addToFavorites(movie);
    }
  }

  addToFavorites(movie: any) {
    this.movieService.addFavoriteMovie(movie.id, movie.title)
      .subscribe((result) => {
        this.movie.favorite = true;
        this.setOpen(true);
        this.setAddedFavoriteProperties(movie);
      })
  }

  removeFromFavorites(movie: any) {
    this.movieService.removeFavoriteMovie(movie.id)
      .subscribe((result) => {
        this.movie.favorite = false;
        this.setOpen(true);
        this.setRemovedFavoriteProperties(movie);
      });
  }

  setAddedFavoriteProperties(movie: any) {
    this.alertObject.header = movie.title;
    this.alertObject.subHeader = 'Agregada';
    this.alertObject.message = `${movie.title} fue agregada a favoritos`;

    this.favoriteButton = 'Remover de Favoritas';
    this.favoriteButtonFill = 'solid';
    this.favoriteButtonIcon = 'star';
    this.favoriteButtonColor = 'danger';
  }

  setRemovedFavoriteProperties(movie: any) {
    this.alertObject.header = movie.title;
    this.alertObject.subHeader = 'Removida';
    this.alertObject.message = `${movie.title} fue removida de favoritos`;

    this.favoriteButton = 'Agregar a Favoritas';
    this.favoriteButtonFill = 'outline';
    this.favoriteButtonIcon = 'star-outline';
    this.favoriteButtonColor = 'medium';
  }

  // open/ close the confirmation alert.
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  onBackButtonClick(){
    this.location.back();
  }

}
