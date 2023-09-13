import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    // MoviesListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
  ],
  providers: [
    MovieService,
  ]
})
export class SharedModule {}