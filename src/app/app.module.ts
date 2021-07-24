import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { BannerComponent } from './main/banner/banner.component';
import { PopularDestinationComponent } from './main/popular-destination/popular-destination.component';
import { FeaturedTravelComponent } from './main/featured-travel/featured-travel.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    CourseCardComponent,
    BannerComponent,
    PopularDestinationComponent,
    FeaturedTravelComponent,
    WhyUsComponent
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
