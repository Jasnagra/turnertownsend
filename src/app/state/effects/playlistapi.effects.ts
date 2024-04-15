import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { PlayListService } from "../../services/playlist-api.service";
import { PlaylistApiActions } from "../actions/playlist.actions";


@Injectable()
export class PlaylistAPIEffects {

  loadPlaylist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistApiActions.getPlayList),
      exhaustMap(() => this.playListService.getPlayList()
        .pipe(
          map(res => PlaylistApiActions.setPlayList({ playlist: res })),
          catchError(() => of(PlaylistApiActions.setPlayListError({showError: true, loading: false})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private playListService: PlayListService) {}
}