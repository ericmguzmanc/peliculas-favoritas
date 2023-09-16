import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesListComponent } from './movies-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MoviesListComponent],
  exports: [MoviesListComponent],
  providers: [],
  imports: [CommonModule, FormsModule, IonicModule, SharedModule],
})
export class MoviesListComponentModule {}
