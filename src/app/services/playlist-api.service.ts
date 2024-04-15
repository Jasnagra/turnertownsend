import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, map } from "rxjs";
import { Playlist } from "../interface/playlist.model";

@Injectable({ providedIn: 'root' })
export class PlayListService {
  constructor(private http: HttpClient) {}

  getPlayList(): Observable<Array<Playlist>> {
    const playListApiUrl = "https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json";
    return this.http
      .get(playListApiUrl)
      .pipe(
        delay(3000),
        map((res: any) => res.featuredPlaylists.content || [])
      );
  }
}