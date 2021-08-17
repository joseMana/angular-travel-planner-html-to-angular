import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TravelsComponent } from './main-app/travel-page/travels.component';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { TravelDetailsComponent } from './main-app/travel-page/travel-details/travel-details.component';
import { TravelsSearchComponent } from './main-app/travel-page/travels-search/travels-search.component';
import { TravelItineraryComponent } from './main-app/travel-page/travel-details/travel-itinerary/travel-itinerary.component';
import { TravelGoalComponent } from './main-app/travel-page/travel-goal/travel-goal.component';
import { SharedModule } from './shared/shared.module';


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
    FooterComponent,
    TravelsComponent,
    ConvertTimePipe,
    TravelDetailsComponent,
    TravelsSearchComponent,
    TravelItineraryComponent,
    TravelGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
