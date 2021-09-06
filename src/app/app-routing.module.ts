import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherDetailsComponent } from './city-weather-details/city-weather-details.component';
import { DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  {path: 'city', component: CityWeatherDetailsComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
