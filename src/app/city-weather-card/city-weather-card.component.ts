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
  sunImageSrc: string = "https://cdn0.iconfinder.com/data/icons/weather-web-app-ui-colored/100/weather-20-512.png";
  cloudsImageSrc: string = "https://icons-for-free.com/iconfiles/png/512/clouds+cloudy+weather+icon-1320196635828207342.png";
  hazeImageSrc: string = "https://cdn2.iconfinder.com/data/icons/weather-170/32/haze-512.png";
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
          this.setImageSource();
          this.isLoading = false;
        }, 2000)
    }, (error)=>{
      this.deleteCard();
    });
  }

  setImageSource(): void{

    switch(this.currentWeather){
      case "Clear":
        this.imageSource = this.sunImageSrc;
        break;
      case "Clouds":
        this.imageSource = this.cloudsImageSrc;
        break;
      case "Haze":
        this.imageSource = this.hazeImageSrc;
        break;
      default:
        this.imageSource = "https://toppng.com/uploads/preview/question-mark-icon-png-11552242874yprntn7fkf.png";
    }
  }

  deleteCard(){
    this.onDelete.emit(this.name);
  }

  openCityDetails(){
    this.router.navigate([`city`, { name: this.name }]);
  }
}
