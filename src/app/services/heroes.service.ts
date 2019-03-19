import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Hero[] = [];

  constructor() {
    this.heroes.push(new Hero('Batman', 'Dark knight'));
    this.heroes.push(new Hero('Robin', 'mate'));
    this.heroes.push(new Hero('Superman', 'Man of steel'));
  }
}
