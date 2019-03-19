import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() content: Hero[];
  constructor() { }

  ngOnInit() {
  }

}
