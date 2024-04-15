import { createActionGroup, props } from "@ngrx/store";
import { Playlist } from "../../interface/playlist.model";


export const PlaylistApiActions = createActionGroup({
  source: 'Playlist API',
  events: {
    'Set Play List': props<{ playlist: Playlist[] }>(),
    'Get Play List': props<{ loading: boolean }>(),
    'Set Play List Error': props<{ showError: boolean, loading: boolean }>(),
  },
});