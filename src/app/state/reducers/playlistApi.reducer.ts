import { createReducer, on } from "@ngrx/store";
import { Playlist } from "../../interface/playlist.model";
import { PlaylistApiActions } from "../actions/playlist.actions";

export interface AppState {
  playlist: Playlist[];
  loading: boolean;
  showError: boolean;
}

export const initialState: AppState = {
  playlist: [],
  loading: false,
  showError: false
};

export const playlistApiReducer = createReducer(
  initialState,
  on(PlaylistApiActions.getPlayList, (state, { loading }) => { return { ...state, loading } }),
  on(PlaylistApiActions.setPlayList, (state, { playlist }) => { return {  ...state, playlist, loading: false, showError: false  } }),
  on(PlaylistApiActions.setPlayListError, (state, { showError, loading }) => { return { ...state, loading, showError } })
)