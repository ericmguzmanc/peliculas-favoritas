import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisFavoritasPageRoutingModule } from './mis-favoritas-routing.module';

import { MisFavoritasPage } from './mis-favoritas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MisFavoritasPageRoutingModule,
    SharedModule
  ],
  declarations: [MisFavoritasPage]
})
export class MisFavoritasPageModule {}
