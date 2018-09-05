import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { TeamBioComponent } from './team-bio/team-bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProfileComponent,
    YoutubeComponent,
    TeamBioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
