import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.css']
})
export class CityWeatherDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  selectedCity: string = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (data: any)=>{
        if(data && data.params && data.params.name){
          this.selectedCity = data.params.name;
        }
      }
    );
  }

}
