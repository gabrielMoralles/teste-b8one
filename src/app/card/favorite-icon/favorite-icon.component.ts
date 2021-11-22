import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  @Input() public fav : boolean = false;

  @Output() public add: EventEmitter<any> = new EventEmitter();

  public bg: string = 'assets/imgs/fav-stamp/stamp-bg-grey.png';
  public icon: string = 'assets/imgs/fav-stamp/heart-grey.png';

  public imgs = {
    notSelected: {
      bg:'assets/imgs/fav-stamp/stamp-bg-grey.png',
      icon:'assets/imgs/fav-stamp/heart-grey.png',
      hover:{
        bg:'assets/imgs/fav-stamp/stamp-bg-pink.png',
        icon:'assets/imgs/fav-stamp/heart-pink.png'
      }
    },
    selected: {
      bg:'assets/imgs/fav-stamp/stamp-bg-red.png',
      icon:'assets/imgs/fav-stamp/heart-red.png',
      hover:{
        bg:'assets/imgs/fav-stamp/stamp-bg-darkred.png',
        icon:'assets/imgs/fav-stamp/heart-red.png'
      }
    },
  }
  constructor() { }

  ngOnInit(): void {
    if(this.fav){
      this.bg = this.imgs.selected.bg;
      this.icon = this.imgs.selected.icon;
    }
  }
  public onClick(){
    this.add.emit(!this.fav);
    if(!this.fav){
      this.bg = this.imgs.selected.bg;
      this.icon = this.imgs.selected.icon;
    }else{
      this.bg = this.imgs.notSelected.bg;
      this.icon = this.imgs.notSelected.icon;
    }
  }
  public changeIcon(event : boolean): void{
      if(this.fav){
        if(event){
          this.bg = this.imgs.selected.hover.bg;
          this.icon = this.imgs.selected.hover.icon;
        }else{
          this.bg = this.imgs.selected.bg;
          this.icon = this.imgs.selected.icon;
        }
      }else{
        if(event){
          this.bg = this.imgs.notSelected.hover.bg;
          this.icon = this.imgs.notSelected.hover.icon;
        }else{
          this.bg = this.imgs.notSelected.bg;
          this.icon = this.imgs.notSelected.icon;
        }
      }
  }
}
