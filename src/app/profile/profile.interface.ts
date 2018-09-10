import {GamesEnum} from './games.enum';

export class ProfileInterface {
  twitchUserName: string;
  twitchUrl: string;
  mixerUrl: string;
  imageUrl: string;
  displayName: string;
  games: GamesEnum[];
}
