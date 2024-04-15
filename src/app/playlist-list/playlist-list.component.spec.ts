import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PlaylistListComponent } from './playlist-list.component';
import {MockSelector, MockStore, provideMockStore} from '@ngrx/store/testing';
import { PlaylistApiActions } from '../state/actions/playlist.actions';
import { AppState } from '../state/reducers/playlistApi.reducer';

describe('PlaylistListComponent', () => {
  let component: PlaylistListComponent;
  let fixture: ComponentFixture<PlaylistListComponent>;
  let store: MockStore;
  const initialState: AppState = { playlist: [], loading: false, showError: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistListComponent],
      providers: [
        provideMockStore({ initialState }),
        provideAnimations()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistListComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
