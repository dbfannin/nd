import {Component, OnInit} from '@angular/core';
import {ProfileInterface} from './profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profiles: ProfileInterface[] = [
    {
      twitchUrl: 'https://www.twitch.tv/dangerdrake89',
      mixerUrl: 'https://mixer.com/DangerDrake',
      imageUrl: 'assets/dangerdrake.png',
      displayName: 'DangerDrake',
    },
    {
      twitchUrl: 'https://www.twitch.tv/turbo_tron',
      mixerUrl: 'https://mixer.com/Turbo_Tron',
      imageUrl: 'assets/turbo_tron.png',
      displayName: 'Turbo_Tron',
    },
    {
      twitchUrl: 'https://www.twitch.tv/tl_sol',
      mixerUrl: 'https://mixer.com/ND_Sol',
      imageUrl: 'assets/sol.png',
      displayName: 'Sol',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
