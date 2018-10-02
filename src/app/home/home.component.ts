import {Component, OnInit} from '@angular/core';
import {ScrollService} from '../scroll/scroll.service';
import {ScrollEventInterface} from '../scroll/scroll-event.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroFadeStart = 100;
  heroFadeEnd = 300;
  heroOpacity = 1;

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.scrollService.watchScroll().subscribe((scrollEvent: ScrollEventInterface) => {
      this.heroOpacity = (scrollEvent.distanceFromTop - this.heroFadeStart) / this.heroFadeEnd;

      if (this.heroOpacity < 0) {
        this.heroOpacity = 0;
      } else if (this.heroOpacity > 1) {
        this.heroOpacity = 1;
      }

      this.heroOpacity = Math.abs(this.heroOpacity - 1);
    });
  }

}
