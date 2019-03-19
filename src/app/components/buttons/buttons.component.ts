import { Component, OnInit, Output, EventEmitter } from '@angular/core';
enum States { Init, FirstFigure, SecondFigure, Result }

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() signal = new EventEmitter<string>();
  display = '';
  currentState = States.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';
  constructor() { }
  handleFigure(num: number) {
    if (this.currentState === States.Init) {
      this.firstFigure = num;
      this.currentState = States.FirstFigure;
      this.updateDisplay(num);
    } else if (this.currentState === States.FirstFigure) {
      this.firstFigure = this.firstFigure * 10 + num;
      this.updateDisplay(num);
    } else if (this.currentState === States.SecondFigure) {
      this.secondFigure = this.secondFigure * 10 + num;
      this.updateDisplay(num);
    } else if (this.currentState === States.Result) {
      this.firstFigure = num;
      this.secondFigure = 0;
      this.result = 0;
      this.operator = '';
      this.display = '';
      this.currentState = States.FirstFigure;
      this.updateDisplay(num);
    }
  }

  updateDisplay(update: any) {
    this.display = this.display + update;
    this.signal.emit(this.display);
  }

  handleSymbol(symbol) {
    if (this.currentState === States.FirstFigure) {
      if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
        this.operator = symbol;
        this.currentState = States.SecondFigure;
        this.updateDisplay(symbol);
      }
    } else if (this.currentState === States.SecondFigure) {
      if (symbol === '=') {
        this.result = this.resolve();
        this.currentState = States.Result;
        this.updateDisplay(symbol + this.result);
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

  ngOnInit() {
  }

}
