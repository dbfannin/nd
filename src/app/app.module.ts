import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { TeamBioComponent } from './team-bio/team-bio.component';
import { TwitchComponent } from './twitch/twitch.component';
import { SkinnyProfilesComponent } from './skinny-profiles/skinny-profiles.component';
import { HomeComponent } from './home/home.component';
import {ROUTING} from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProfileComponent,
    YoutubeComponent,
    TeamBioComponent,
    TwitchComponent,
    SkinnyProfilesComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
