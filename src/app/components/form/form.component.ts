import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() signalNewHero = new EventEmitter<Hero>();
  newHeroName = '';
  newHeroDescription = '';
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.signalNewHero.emit(new Hero(this.newHeroName, this.newHeroDescription));
    this.newHeroName = '';
    this.newHeroDescription = '';
  }

}
