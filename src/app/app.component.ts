import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoading, selectPlayList, selectShowError } from './state/selectors/playlist.selector';
import { HttpClient } from '@angular/common/http';
import { PlaylistApiActions } from './state/actions/playlist.actions';
import { PlaylistListComponent } from "./playlist-list/playlist-list.component";
import { AppState } from './state/reducers/playlistApi.reducer';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [HttpClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PlaylistListComponent, CommonModule, MatProgressSpinnerModule]
})
export class AppComponent implements OnInit {
  private subscription: Subscription = Subscription.EMPTY;
  playList$ = this.store.select(selectPlayList);
  loading$ = this.store.select(selectLoading);
  showError$ = this.store.select(selectShowError);
  
  constructor(private _snackBar: MatSnackBar, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(PlaylistApiActions.getPlayList({ loading: true }));
    this.subscription = this.showError$.subscribe(res => {
      if (res) {
        this._snackBar.open('There was an error', 'X', {
          duration: 30000
        });
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
