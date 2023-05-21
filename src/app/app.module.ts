import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './Header/topnav.component';
import { NavBarComponent } from './Header/navbar.component';
import { CarouselComponent } from './Header/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    NavBarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
