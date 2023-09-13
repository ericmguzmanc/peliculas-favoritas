import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'peliculas',
        loadChildren: () => import('../peliculas/peliculas.module').then(m => m.PeliculasPageModule)
      },
      {
        path: 'mis-favoritas',
        loadChildren: () => import('../mis-favoritas/mis-favoritas.module').then(m => m.MisFavoritasPageModule)
      },
      {
        path: 'movie-details',
        loadChildren: () => import('../movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/peliculas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
