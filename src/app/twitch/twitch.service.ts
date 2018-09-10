import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TwitchUserInterface} from './twitch-user.interface';
import {TwitchClipsInterface} from './twitch-clips.interface';
import {TwitchVideosInterface} from './twitch-videos.interface';
import {TwitchStreamInterface} from './twitch-stream.interface';

/** https://dev.twitch.tv/docs/api/reference **/

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private readonly clientId = '0ujmks0iqz8u8a90cirfoibd59x382';
  private baseUrl = 'https://api.twitch.tv/';

  constructor(private httpClient: HttpClient) {
  }

  private _get(url: string, queryParams: any = {}): Observable<any> {
    const options = {
      headers: {'Client-ID': this.clientId},
      params: queryParams
    };
    return this.httpClient.get(this.baseUrl + url, options);
  }


  getUser(userName: string, next: (user: TwitchUserInterface) => void): Subscription {
    return new Observable<TwitchUserInterface>(observer => {
      const queryParams = {
        login: userName
      };

      this._get('helix/users', queryParams).subscribe(user => {
        observer.next(user['data'][0]);
        observer.complete();
      });
    }).subscribe(next);
  }

  getStream(userName: string, next: (stream: TwitchStreamInterface) => void): Subscription {
    return new Observable<TwitchStreamInterface>(observer => {
      this._get('kraken/streams/' + userName).subscribe(channel => {
        observer.next(channel['stream']);
        observer.complete();
      });
    }).subscribe(next);
  }


  getClips(userId: string, next: (clips: TwitchClipsInterface[]) => void): Subscription {
    return new Observable<TwitchClipsInterface[]>(observer => {
      const queryParams = {broadcaster_id: userId};
      this._get('helix/clips', queryParams).subscribe(clips => {
        observer.next(clips['data']);
        observer.complete();
      });
    }).subscribe(next);
  }


  getVideos(userId: string, next: (clips: TwitchVideosInterface[]) => void): Subscription {
    return new Observable<TwitchVideosInterface[]>(observer => {
      const queryParams = {user_id: userId};
      this._get('helix/videos', queryParams).subscribe(clips => {
        observer.next(clips['data']);
        observer.complete();
      });
    }).subscribe(next);
  }

}
