import {ProfileInterface} from './app/profile/profile.interface';
import {GamesEnum} from './app/profile/games.enum';

export const DangerDude: ProfileInterface = {
  twitchUserName: 'dangerdrake89',
  // twitchUrl: 'twitch.tv/dangerdrake89',
  mixerUrl: 'mixer.com/DangerDude',
  imageUrl: '/assets/dangerdrake.png',
  displayName: 'DangerDude',
  games: [GamesEnum.SevenDaysToDie, GamesEnum.Scum],
  profileRoute: '/danger_dude'
};

export const TurboTron: ProfileInterface = {
  twitchUserName: 'turbo_tron',
  // twitchUrl: 'twitch.tv/turbo_tron',
  mixerUrl: 'mixer.com/Turbo_Tron',
  imageUrl: '/assets/turbo_tron.png',
  displayName: 'Turbo_Tron',
  games: [GamesEnum.SevenDaysToDie, GamesEnum.Scum],
  profileRoute: '/turbo_tron'
};

export const Sol: ProfileInterface = {
  twitchUserName: 'nd_sol',
  twitchUrl: 'twitch.tv/nd_sol',
  // mixerUrl: 'mixer.com/ND_Sol',
  imageUrl: '/assets/sol.png',
  displayName: 'Sol',
  games: [GamesEnum.Fortnite, GamesEnum.Scum],
  profileRoute: '/sol'
};
