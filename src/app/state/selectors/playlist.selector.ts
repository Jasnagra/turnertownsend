import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers/playlistApi.reducer";

const initState = (state: any) => state.playlistStore;

export const selectPlayList = createSelector(
  initState,
  (state: AppState) => state.playlist
);

export const selectLoading = createSelector(
  initState,
  (state: AppState) =>  state.loading
);

export const selectShowError = createSelector(
  initState,
  (state: AppState) =>  state.showError
);