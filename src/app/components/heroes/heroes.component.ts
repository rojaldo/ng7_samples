import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  newHero = '';
  heroes = ['Batman', 'Robin', 'Superman'];
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.heroes.push(this.newHero);
    this.newHero = '';
  }

}
