import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes = ['Batman', 'Robin', 'Superman'];

  constructor() { }
}
