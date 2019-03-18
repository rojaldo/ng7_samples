import { Component, OnInit } from '@angular/core';

enum States { Init, FirstFigure, SecondFigure, Result }

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display = '';
  currentState = States.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit() {
  }

  handleFigure(num: number) {
    if (this.currentState === States.Init) {
      this.firstFigure = num;
      this.currentState = States.FirstFigure;
      this.display = this.display + num;
    } else if (this.currentState === States.FirstFigure) {
      this.firstFigure = this.firstFigure * 10 + num;
      this.display = this.display + num;
    } else if (this.currentState === States.SecondFigure) {
      this.secondFigure = this.secondFigure * 10 + num;
      this.display = this.display + num;
    } else if (this.currentState === States.Result) {
      this.firstFigure = num;
      this.secondFigure = 0;
      this.result = 0;
      this.operator = '';
      this.display = '';
      this.currentState = States.FirstFigure;
      this.display = this.display + num;
    }
  }

  handleSymbol(symbol) {
    if (this.currentState === States.FirstFigure) {
      if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
        this.operator = symbol;
        this.currentState = States.SecondFigure;
        this.display = this.display + symbol;
      }
    } else if (this.currentState === States.SecondFigure) {
      if (symbol === '=') {
        this.result = this.resolve();
        this.currentState = States.Result;
        this.display = this.display + symbol + this.result;
      }
    }
  }

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
