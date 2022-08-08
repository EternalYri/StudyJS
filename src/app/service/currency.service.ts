import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()

export class CurrencyService {

  value: string ='';

  constructor(public http: HttpClient) {}

  onAdd() {
  return  this.http.get(`https://api.binance.com/api/v3/ticker/price?symbol=${this.value}USDT`)
  .pipe(
    map(data=>data)
  )
  }

}
