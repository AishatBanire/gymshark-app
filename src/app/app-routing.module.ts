import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/login.component';
import { NavBarComponent } from './Header/navbar.component';
import { TopNavComponent } from './Header/topnav.component';
import { VideoComponent } from './Body/Cards/video/video.component';
import { NewReleaseCardsComponent } from './Body/Cards/new-release-cards.component';
import { CardComponent } from './Body/Cards/card.component';
import { CarouselComponent } from './Header/carousel.component';
import { PhotoOverlayComponent } from './Header/photo-overlay/photo-overlay.component';
import { FooterComponent } from './Footer/footer.component';

const routes: Routes = [
  
  { path:'NavBar', component: NavBarComponent},
  { path:'TopNav', component: TopNavComponent},
  { path:'carousel', component: CarouselComponent},
  { path:'photo-overlay', component: PhotoOverlayComponent},
  {path:'log-in', component: LogInComponent},
  {path:'video', component: VideoComponent},
  {path:'release', component: NewReleaseCardsComponent},
  {path:'card', component: CardComponent},
  { path:'footer', component: FooterComponent},

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
