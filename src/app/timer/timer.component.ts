import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  inner ='';
  p:any = document.getElementsByClassName('show__timer')
  current: any;
  min:number;
  timer:any;
  input: any = document.getElementsByTagName('app-input');
  onTicker($event: any) {
    this.min = $event;
    this.p[0].innerText = '00:00';
  }
  startTimer():void {
    let minut = this.min * 60;
    if (Number.isNaN(minut)) {
      this.p[0].innerText = 'Введите число!'
    } else {
      this.timer = setInterval((): void =>{
      let second = minut%60;
      let minutes = minut/60%60;
      if(minut<=0) {
      clearInterval(this.timer);
      alert('Time is out')
      } else {
        this.p[0].innerText = `${Math.trunc(minutes)}: ${second}`;
        +this.p[0].innerText;
      }
      --minut
    }, 1000)
    }

  }
  stopTimer() {
    clearInterval(this.timer);
    this.p[0].innerText = '00:00';
  }
  ngOnInit(): void {
    this.p[0].innerText = '00:00';
  }

}
