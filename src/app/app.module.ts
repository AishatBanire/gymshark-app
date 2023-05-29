import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './Header/topnav.component';
import { NavBarComponent } from './Header/navbar.component';
import { CarouselComponent } from './Header/carousel.component';
import { PhotoOverlayComponent } from './Header/photo-overlay/photo-overlay.component';
import { NewReleaseCardsComponent } from './Cards/new-release-cards.component';
import { VideoComponent } from './video/video.component';
import { CardComponent } from './Cards/card.component';
import { NewReleaseCards } from './Cards/NewReleaseCards.model';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    NavBarComponent,
    CarouselComponent,
    PhotoOverlayComponent,
    NewReleaseCardsComponent,
    VideoComponent,
    CardComponent,
   

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
