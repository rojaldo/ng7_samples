import { Injectable } from '@angular/core';
export enum States { Init, FirstFigure, SecondFigure, Result }

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  display = '';
  currentState = States.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
        case '-':
        return this.firstFigure - this.secondFigure;
        case '*':
        return this.firstFigure * this.secondFigure;
        case '/':
        return this.firstFigure / this.secondFigure;
    }
  }
}
