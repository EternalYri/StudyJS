import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent{
  loading = false;
  arr: any = [];
  inputValue = '';
  div: any = document.getElementsByClassName('currency__show')
  response: any;

  constructor(public api: HttpClient) { }
  onTicker($event: any) :void {
    this.inputValue = $event;
  }
  reqest() {
    try{
      this.loading = true;
      this.api.get(`https://api.binance.com/api/v3/ticker/price?symbol=${this.inputValue.toUpperCase()}USDT`)
      .subscribe((data)=>{
        this.response = data;
        this.arr.push(this.response);
        this.loading = false;
      })
    } catch(error) {
      console.log(error)
      this.loading = false;
    }
    }
    del(data: number) {
      this.div[data].remove();
      this.arr.splice(data, 1);
    }
}
