import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesListComponent } from './movies-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MoviesListComponent],
  exports: [MoviesListComponent]
})
export class MoviesListComponentModule {}
