import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {ScrollEventInterface} from './scroll-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _scrollSource = new Subject<UIEvent>();
  private $scroll = this._scrollSource.asObservable();
  private _scrollingUp: boolean;
  private previousScrollPosition = 0;

  constructor() {
    document.addEventListener('scroll', (event: UIEvent) => {
      const newScrollPosition = this.getBodyScrollTop();
      this._scrollingUp = newScrollPosition < this.previousScrollPosition;
      this._scrollSource.next(event);
    });
  }

  getBodyScrollTop(): number {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }

  getDistanceFromBottom(): number {
    const distanceFromBottom = document.body.scrollHeight - (window.innerHeight + this.getBodyScrollTop());

    return distanceFromBottom < 0 ? 0 : distanceFromBottom;
  }

  watchScroll(): Observable<ScrollEventInterface> {
    return this._scrollSource.asObservable().pipe(map((event: UIEvent) => {
      const newScrollPosition = this.getBodyScrollTop();

      const distanceFromBottom = this.getDistanceFromBottom();

      return {
        distanceFromBottom: distanceFromBottom,
        distanceFromTop: newScrollPosition,
        atTop: newScrollPosition === 0,
        atBottom: distanceFromBottom === 0,
        scrollDown: !this._scrollingUp,
        scrollUp: this._scrollingUp,
      };
    }));
  }
}
