import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  newHero = '';
  constructor(public service: HeroesService) { }

  ngOnInit() {
  }

  addHero() {
    this.service.heroes.push(this.newHero);
    this.newHero = '';
  }

}
