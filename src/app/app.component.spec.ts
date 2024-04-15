import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MockSelector, MockStore, provideMockStore} from '@ngrx/store/testing';
import { AppState } from './state/reducers/playlistApi.reducer';
import { PlaylistApiActions } from './state/actions/playlist.actions';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { selectShowError } from './state/selectors/playlist.selector';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;
  const initialState: AppState = { playlist: [], loading: false, showError: true };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideMockStore({ 
          initialState,
          selectors: [{
              selector: selectShowError,
              value: true
          }],
        }),
        provideAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch on initialization', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  
    expect(dispatchSpy).toHaveBeenCalledWith(PlaylistApiActions.getPlayList({ loading: true }));
  });

  it('should dispatch on initialization', () => {
    const spy =  spyOn(component['_snackBar'], 'open');
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  
    expect(spy).toHaveBeenCalledWith('There was an error', 'X', Object({ duration: 30000 }));
  });
});

