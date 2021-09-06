import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cityList: string[] = ['Rīga', 'Tukums', 'Sabile', 'Deli'];

  constructor() { }

  ngOnInit(): void {
  }

  addCity(cityName: string): void{
    this.cityList.push(cityName);
  }

  deleteCity(cityName: string): void{
    //Atrodam padotās pilsētas index masīvā
    const index = this.cityList
      .findIndex(city=>city == cityName);

    //izdzēšam šo elementu no masīva
    this.cityList.splice(index, 1);
  }
}
