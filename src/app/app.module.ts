import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './Header/topnav.component';
import { NavBarComponent } from './Header/navbar.component';
import { CarouselComponent } from './Header/carousel.component';
import { PhotoOverlayComponent } from './Header/photo-overlay/photo-overlay.component';
import { NewReleaseCardsComponent } from './Body/Cards/new-release-cards.component';
import { VideoComponent } from './Body/Cards/video/video.component';
import { CardComponent } from './Body/Cards/card.component';
import { NewReleaseCardsModel } from './Body/Cards/NewReleaseCards.model';
import { AppRoutingModule } from './app-routing.module';
import {FooterComponent} from './Footer/footer.component';
import { AccountComponent } from './Nav/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Nav/user-info.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './login/login.component';

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
    FooterComponent,
    AccountComponent,
    UserInfoComponent,
    LogInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
