import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayListService } from './playlist-api.service';


describe('PlaylistServiceComponent', () => {
  let service: PlayListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayListService]
    })
    .compileComponents();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
