import { Component} from '@angular/core';
import { CurrencyService } from '../service/currency.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [CurrencyService]
})
export class CurrencyComponent{
  loading = false;
  arr: any = [];
  inputValue = '';
  div: any = document.getElementsByClassName('currency__show')

  constructor(private http: CurrencyService) { }
  onTicker($event: any) :void {
    this.inputValue = $event;
  }

  reqest() {
    try{
      this.loading = true;
      this.http.value = this.inputValue.toUpperCase()
      this.http.onAdd()
      .subscribe((data)=>{
        this.arr.push(data);
        this.loading = false;
      })
    } catch(error) {
      console.log(error)
      this.loading = false;
    }
    }

  del(data: number) {
    this.arr.splice(data, 1);
  }
}
