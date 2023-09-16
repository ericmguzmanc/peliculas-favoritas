import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasPage } from './peliculas.page';
import { FavoritesResolver } from '../shared/resolvers/favorites.resolver';

const routes: Routes = [
  {
    path: '',
    component: PeliculasPage,
    resolve: {
      favorites: FavoritesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasPageRoutingModule {}
