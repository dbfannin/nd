import {TwitchChannelInterface} from './twitch-channel.interface';

export class TwitchStreamInterface {
  _id: number;
  game: string;
  viewers: number;
  video_height: number;
  average_fps: number;
  delay: number;
  created_at: string;
  is_playlist: boolean;
  stream_type: string;
  preview: {
    small: string;
    medium: string;
    large: string;
    template: string;
  };
  channel: TwitchChannelInterface;
}
