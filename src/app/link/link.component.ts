import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() title =''
  @Input() name = ''
  @Input() link = ''
  @Input() resource = ''
  constructor() { }

  ngOnInit(): void {
  }

}
