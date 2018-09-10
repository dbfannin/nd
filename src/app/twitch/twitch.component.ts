import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TwitchService} from './twitch.service';
import {TwitchUserInterface} from './twitch-user.interface';
import {TwitchClipsInterface} from './twitch-clips.interface';
import {TwitchVideosInterface} from './twitch-videos.interface';
import {TwitchStreamInterface} from './twitch-stream.interface';


@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  private _twitchId: string;
  @Input() set twitchId(id: string) {
    this._twitchId = 'dakotaz';
    this.containerId = 'twitch-' + id;
    this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl('https://player.twitch.tv/?channel=' + id);
  }

  private twitchUser: TwitchUserInterface;

  iframeSrc: SafeResourceUrl;
  stream: any;

  protected containerId: string;

  constructor(private twitchService: TwitchService,
              private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.twitchService.getUser(this._twitchId, (user: TwitchUserInterface) => {
      this.twitchUser = user;
      if (user) {
        this._afterUserInit();
      }
    });


    this.twitchService.getStream(this._twitchId, (stream: TwitchStreamInterface) => {
      this.stream = stream;
      console.log('stream', JSON.stringify(stream));
    });
  }

  private _afterUserInit() {
    this.twitchService.getClips(this.twitchUser.id, (clips: TwitchClipsInterface[]) => {
      // console.log('clips', clips);
    });
    this.twitchService.getVideos(this.twitchUser.id, (clips: TwitchVideosInterface[]) => {
      // console.log('videos', clips);
    });
  }

}
