import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisFavoritasPage } from './mis-favoritas.page';

const routes: Routes = [
  {
    path: '',
    component: MisFavoritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisFavoritasPageRoutingModule {}
