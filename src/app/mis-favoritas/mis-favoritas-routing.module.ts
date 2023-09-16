import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisFavoritasPage } from './mis-favoritas.page';
import { FavoritesResolver } from '../shared/resolvers/favorites.resolver';

const routes: Routes = [
  {
    path: '',
    component: MisFavoritasPage,
    resolve: {
      favorites: FavoritesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisFavoritasPageRoutingModule {}
