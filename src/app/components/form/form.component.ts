import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() signalNewHero = new EventEmitter<string>();
  newHero = '';
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.signalNewHero.emit(this.newHero);
    this.newHero = '';
  }

}
