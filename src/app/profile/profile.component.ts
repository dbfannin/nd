import {Component, OnInit} from '@angular/core';
import {ProfileInterface} from './profile.interface';
import {GamesEnum} from './games.enum';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: ProfileInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.user = data['profile'];
      console.log(this.user);
    });
  }

}
