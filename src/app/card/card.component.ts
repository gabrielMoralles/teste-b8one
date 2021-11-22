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
  }
  public onAdd(event: any){
    this.product.fav = event;
  }
  public onClick(){
    this.product.add = !this.product.add;
  }
}
