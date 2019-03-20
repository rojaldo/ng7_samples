import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() content: Hero[];
  @Output() deleteHero = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  removeItem(index: number) {
    console.log('remove: ' + index);
    this.deleteHero.emit(index);
  }

}
