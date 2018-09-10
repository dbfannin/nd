import {Injectable} from '@angular/core';
import {each} from 'lodash';
import {loadExternalScript} from './utils';
import {NavigationStart, Router} from '@angular/router';

declare const gtag;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor(private router: Router) {
    (<any>window).dataLayer = (<any>window).dataLayer || [];

    // tslint:disable-next-line
    (<any>window).gtag = function gtag() {
      (<any>window).dataLayer.push(arguments);
    };
  }

  private readonly id = 'UA-125517545-1';
  private ready = false;

  private loadQueue: any[] = [];

  init(done?: () => void) {
    loadExternalScript(`https://www.googletagmanager.com/gtag/js?id=${this.id}`, () => {

      // pull everthing off the queue
      each(this.loadQueue, item => {

        // make sure the id is set for pageviews
        if (item[0] === 'config') {
          item[1] = this.id;
        }

        gtag(item[0], item[1], item[2]);
      });

      this.ready = true;

      if (done) {
        done();
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.trackPage(event.url);
      }
    });
  }

  trackPage(url: string) {
    if (!this.ready) {
      this.loadQueue.push(['config', this.id, {'page_path': url}]);
    }

    gtag('config', this.id, {'page_path': url});
  }

  trackEvent(action: string, data: any = {}) {
    if (!this.ready) {
      this.loadQueue.push(['event', action, data]);
    }

    gtag('event', action, data);
  }

}
