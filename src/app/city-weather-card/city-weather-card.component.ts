import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.css'],
})
export class CityWeatherCardComponent implements OnInit {

  @Input() name: string = 'Riga';
  @Output() onDelete = new EventEmitter<string>(); //<comp-name (onDelete)="handler(cityName)">

  currentTemperature: number | undefined = undefined;
  currentWeather: string | undefined = undefined;
  imageSource: string | undefined = undefined;
  isLoading: boolean = false;
  constructor(
    private weatherService: WeatherService,
    private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.weatherService.getWeather(this.name)
      .subscribe((data : any) => {
        setTimeout(() => {
          this.currentTemperature = Math.round(data.main.temp);
          //Clear, Clouds, Haze
          this.currentWeather = data.weather[0].main;
          this.imageSource = data.weather[0].icon;
          this.isLoading = false;
        }, 2000)
    }, (error: any)=>{
      this.deleteCard();
    });
  }

  deleteCard(){
    this.onDelete.emit(this.name);
  }

  openCityDetails(){
    this.router.navigate([`city`, { name: this.name }]);
  }
}
