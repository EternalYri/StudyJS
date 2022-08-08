import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  map} from "rxjs"

@Injectable()

export class WeatherService{
  constructor(private weather: HttpClient) {}

  weatherTicket: string = '';

  onAdd() {
    return this.weather.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.weatherTicket},ru&appid=62e2049673572d819816bd241cb6fda6`)
    .pipe(
      map(data=>data)
    )
  }
}
