import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  cors = 'https://cors-anywere.herocuapp.com/'
  error = false;
  weatherTic =''
  weatherTicket ='';
  answer:any;
  city: string ='';
  temp: number = 0;
  wind:number = 0;
  icon:string ='';
  onTicker($event: any) {
    this.weatherTicket = $event;
  }

  constructor(public weather:HttpClient) { }
  reqest() {
    try{
      this.error = true;
      this.weather.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.weatherTicket},ru&appid=62e2049673572d819816bd241cb6fda6`)
      .subscribe((data)=> {
      this.answer = data
      this.temp = Math.trunc(this.answer.main.temp) - 273;
      this.icon = 'http://openweathermap.org/img/wn/' + this.answer.weather[0].icon  + '.png'
      this.wind = this.answer.wind.speed;
      this.city = this.answer.name;
      this.weatherTic = this.weatherTicket;
      this.error = false;
    })
    } catch(error) {
      console.log(error)
    }

  }
}
