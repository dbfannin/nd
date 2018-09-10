import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DangerDude, Sol, TurboTron} from '../profiles.data';
import {ProfileComponent} from './profile/profile.component';
import {NotFoundComponent} from './not-found/not-found.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sol',
    data: {
      profile: Sol
    },
    component: ProfileComponent
  },
  {
    path: 'turbo_tron',
    data: {
      profile: TurboTron
    },
    component: ProfileComponent
  },
  {
    path: 'danger_dude',
    data: {
      profile: DangerDude
    },
    component: ProfileComponent
  },
  // Catch All Route
  {
    path: '**',
    component: NotFoundComponent
  },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
