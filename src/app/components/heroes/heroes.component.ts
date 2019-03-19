import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public service: HeroesService) { }

  ngOnInit() {
  }

  addHero(newHero: Hero) {
    this.service.heroes.push(newHero);
  }

}
