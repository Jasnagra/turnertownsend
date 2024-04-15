import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { playlistApiReducer } from './state/reducers/playlistApi.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { PlaylistAPIEffects } from './state/effects/playlistapi.effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouterStore(),
    provideStore({ playlistStore: playlistApiReducer,  router: routerReducer }),
    provideHttpClient(),
    provideStoreDevtools(),
    provideAnimations(),
    provideEffects(PlaylistAPIEffects)
],
};
