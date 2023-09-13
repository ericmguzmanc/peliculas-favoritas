import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesListComponentModule } from '../movies-list/movies-list.module';
import { MovieService } from '../shared/services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    PeliculasPageRoutingModule,
    MoviesListComponentModule,
    SharedModule
  ],
  declarations: [PeliculasPage],
  providers: [
    MovieService
  ]
})
export class PeliculasPageModule {}
