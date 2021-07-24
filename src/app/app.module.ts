import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { PopularDestinationComponent } from './home-page/popular-destination/popular-destination.component';
import { FeaturedTravelComponent } from './home-page/featured-travel/featured-travel.component';
import { WhyUsComponent } from './home-page/why-us/why-us.component';
import { TestimonialComponent } from './home-page/testimonial/testimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    SideMenuComponent,
    HomePageComponent,
    BannerComponent,
    PopularDestinationComponent,
    FeaturedTravelComponent,
    WhyUsComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
