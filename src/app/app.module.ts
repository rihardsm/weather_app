import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, CityWeatherCardComponent, CityWeatherDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
