import { Routes } from '@angular/router';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

export const routes: Routes = [
  {path : '' , redirectTo : '/playlist' , pathMatch : 'full'},
  { path: 'playlist', component: PlaylistListComponent }
];
