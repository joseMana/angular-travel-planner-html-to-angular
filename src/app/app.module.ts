import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { SideMenuComponent } from './main-app/side-menu/side-menu.component';
import { HomePageComponent } from './main-app/home-page/home-page.component';
import { BannerComponent } from './main-app/home-page/banner/banner.component';
import { PopularDestinationComponent } from './main-app//home-page/popular-destination/popular-destination.component';
import { FeaturedTravelComponent } from './main-app/home-page/featured-travel/featured-travel.component';
import { WhyUsComponent } from './main-app//home-page/why-us/why-us.component';
import { TestimonialComponent } from './main-app/home-page/testimonial/testimonial.component';
import { FooterComponent } from './main-app/home-page/footer/footer.component';


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
    TestimonialComponent,
    FooterComponent
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
