import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_KEY = "c1dd7a84ee40b2d1bc776d238eb0b7a1";

  constructor(private http: HttpClient) { }

  getWeather(cityName: string){
    return this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}&units=metric`);
  }
}
