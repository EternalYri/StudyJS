import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() public class = 'main';
  @Output() onImput = new EventEmitter<string>();
  @Input() type =''
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  onNewInput(value: string) {
    this.onImput.emit(value);
  }
}
