import {Component, OnInit} from '@angular/core';
import {SocialMediaItemInterface} from './social-media-item.interface';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  socialItems: SocialMediaItemInterface[] = [
    {
      href: 'https://www.instagram.com/thenormaldudes/',
      iconClass: 'fab fa-instagram'
    },
    {
      href: 'https://www.youtube.com/channel/UCBX1oiWgd2zUkA3s1_c5NrA',
      iconClass: 'fab fa-youtube'
    },
    {
      href: 'https://twitter.com/TheNormalDudes',
      iconClass: 'fab fa-twitter'
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
