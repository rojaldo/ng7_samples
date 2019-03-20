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
  currentRate = 5;
  showButton = false;
  classButton = 'btn btn-secondary';

  constructor() { }

  ngOnInit() {
  }

  isEmpty(value: string) {
    this.showButton =  (value !== '');
    if (this.showButton) {
      this.classButton = 'btn btn-primary';
    } else {
      this.classButton = 'btn btn-secondary';
    }
  }

  addHero(name: any, description: any) {
    this.signalNewHero.emit(new Hero(name.value, description.value, this.currentRate));
    description.value = '';
    name.value = '';
    this.showButton = false;
  }

  isNameNotEmpty(): boolean {
    return this.newHeroName !== '';
  }

}
