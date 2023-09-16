import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsPage } from './movie-details.page';
import { FavoritesResolver } from '../shared/resolvers/favorites.resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsPage,
    resolve: {
      favorites: FavoritesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsPageRoutingModule {}
