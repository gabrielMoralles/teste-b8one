import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public product : any
  public hover: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

}
