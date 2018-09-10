import {ProfileInterface} from './app/profile/profile.interface';
import {GamesEnum} from './app/profile/games.enum';

export const DangerDude: ProfileInterface = {
  twitchUserName: 'dangerdrake89',
  twitchUrl: 'https://www.twitch.tv/dangerdrake89',
  mixerUrl: 'https://mixer.com/DangerDude',
  imageUrl: 'assets/dangerdrake.png',
  displayName: 'DangerDude',
  games: [GamesEnum.SevenDaysToDie, GamesEnum.Scum]
};

export const TurboTron: ProfileInterface = {
  twitchUserName: 'turbo_tron',
  twitchUrl: 'https://www.twitch.tv/turbo_tron',
  mixerUrl: 'https://mixer.com/Turbo_Tron',
  imageUrl: 'assets/turbo_tron.png',
  displayName: 'Turbo_Tron',
  games: [GamesEnum.SevenDaysToDie, GamesEnum.Scum]
};

export const Sol: ProfileInterface = {
  twitchUserName: 'tl_sol',
  twitchUrl: 'https://www.twitch.tv/tl_sol',
  mixerUrl: 'https://mixer.com/ND_Sol',
  imageUrl: 'assets/sol.png',
  displayName: 'Sol',
  games: [GamesEnum.Fortnite, GamesEnum.Scum]
};
