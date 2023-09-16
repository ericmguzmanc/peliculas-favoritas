import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieService } from './services/movie.service';
import { FavoritesResolver } from './resolvers/favorites.resolver';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
  ],
  providers: [
    MovieService,
    FavoritesResolver
  ]
})
export class SharedModule {}