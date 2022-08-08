import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent {
  error = false;
  weatherTic =''
  weatherTicket ='';
  answer:any;
  city: string ='';
  temp: number = 0;
  wind:number = 0;
  icon:string ='';

  onTicker($event: any) {
    this.weathers.weatherTicket = $event;
  }

  constructor(private weathers: WeatherService ) { }
  reqest() {
    try{
      this.error = true;
      this.weathers.onAdd()
      .subscribe((answer)=> {
      this.temp = Math.trunc(answer['main']['temp']) - 273;
      this.icon = 'http://openweathermap.org/img/wn/' + answer['weather'][0]['icon']  + '.png'
      this.wind = answer['wind']['speed'];
      this.city = answer['name'];
      this.weatherTic = this.weatherTicket;
      this.error = false;
    })
    } catch(error) {
      console.log(error)
    }

  }
}
