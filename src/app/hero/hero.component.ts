import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  backgroundImageUrl = `${environment.assetBasePath}assets/banner.png` ;

  constructor() { }

  ngOnInit() {
  }

}
