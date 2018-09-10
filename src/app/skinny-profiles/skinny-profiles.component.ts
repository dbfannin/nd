import { Component, OnInit } from '@angular/core';
import {ProfileInterface} from '../profile/profile.interface';
import {DangerDude, Sol, TurboTron} from '../../profiles.data';

@Component({
  selector: 'app-skinny-profiles',
  templateUrl: './skinny-profiles.component.html',
  styleUrls: ['./skinny-profiles.component.scss']
})
export class SkinnyProfilesComponent implements OnInit {
  profiles: ProfileInterface[] = [
    DangerDude,
    TurboTron,
    Sol
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
