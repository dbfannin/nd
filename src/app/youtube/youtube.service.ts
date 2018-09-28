import {Injectable} from '@angular/core';
import {loadExternalScript} from '../utils';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription, from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private readonly _apiKey = 'AIzaSyAg9aBAbU0ehB7Jm11zu53GvHzP9sAQ4os';

  private readonly _baseApiRoute = 'https://www.googleapis.com/youtube/v3/';
  private readonly _channelId = 'UCBX1oiWgd2zUkA3s1_c5NrA';

  private _gapi: any;

  private _isInitialized = false;

  constructor(private httpClient: HttpClient) {
  }

  private _get(path: string, params: object): Observable<any> {
    return from(this._gapi.client.request({path: this._baseApiRoute + path, params: params}));
  }

  private _initClient(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this._gapi.load('client', () => {
        this._gapi.client.init({
          'apiKey': this._apiKey,
        }).then(() => {
          this._isInitialized = true;
          observer.next(true);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
      });
    });
  }

  init(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      loadExternalScript('https://apis.google.com/js/api.js', () => {
        this._gapi = (<any>window).gapi;

        if (!this._gapi) {
          console.error('gapi did not load');
          return;
        }

        this._initClient().subscribe((isReady: boolean) => {
          observer.next(isReady);
          observer.complete();
        }, err => observer.error(err));
      });
    });
  }

  getChannel(next: (channel: any) => void): Subscription {
    if (!this._isInitialized) return;

    return this._get(`channels`, {id: this._channelId, part: 'contentDetails'}).pipe(map(response => {
      try {
        return response.result.items[0];
      } catch (e) {
        return null;
      }
    })).subscribe(next);
  }

  getLatestUpload(playlistId: string, next: (videoId: string) => void): Subscription {
    return this._get(`playlistItems`, {playlistId: playlistId, part: 'snippet', maxResults: 1}).pipe(map(response => {
      try {
        return response.result.items[0].snippet.resourceId.videoId;
      } catch (e) {
        return null;
      }
    })).subscribe(next);  }


}

