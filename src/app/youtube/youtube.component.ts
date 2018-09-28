import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {YoutubeService} from './youtube.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  videoId: SafeResourceUrl;

  constructor(private youtubeApi: YoutubeService,
              private sanitizer: DomSanitizer,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.youtubeApi.init().subscribe(isReady => {
      if (!isReady) return;

      this.youtubeApi.getChannel(channel => {
        if (channel) {
          this.youtubeApi.getLatestUpload(channel.contentDetails.relatedPlaylists.uploads, (videoId: string) => {
            if (videoId) {
              this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);

              this.changeDetectorRef.detectChanges();
            }
          });
        }
      });

    });
  }

}
