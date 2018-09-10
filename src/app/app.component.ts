import { Component } from '@angular/core';
import {GoogleAnalyticsService} from './google-analytics-tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tracking: GoogleAnalyticsService) {
    tracking.init();
  }
}
