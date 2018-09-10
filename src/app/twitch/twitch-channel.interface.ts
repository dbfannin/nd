import {TwitchChannelLinksInterface} from './twitch-channel-links.interface';

export class TwitchChannelInterface {
  mature: boolean;
  partner: boolean;
  status: string;
  broadcaster_language: string;
  display_name: string;
  game: string;
  language: string;
  _id: number;
  name: string;
  created_at: string;
  updated_at: string;
  delay: number;
  logo: string;
  banner: string;
  video_banner: string;
  background: string;
  profile_banner: string;
  profile_banner_background_color: string;
  url: string;
  views: number;
  followers: number;
  _links: TwitchChannelLinksInterface;
}
