import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  @Input() public fav : any;

  @Output() public add: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
