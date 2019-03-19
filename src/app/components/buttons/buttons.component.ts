import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProcessorService, States } from 'src/app/services/processor.service';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();

  constructor(public service: ProcessorService) { }

  handleFigure(num: number) {
    if (this.service.currentState === States.Init) {
      this.service.firstFigure = num;
      this.service.currentState = States.FirstFigure;
      this.updateDisplay(num);
    } else if (this.service.currentState === States.FirstFigure) {
      this.service.firstFigure = this.service.firstFigure * 10 + num;
      this.updateDisplay(num);
    } else if (this.service.currentState === States.SecondFigure) {
      this.service.secondFigure = this.service.secondFigure * 10 + num;
      this.updateDisplay(num);
    } else if (this.service.currentState === States.Result) {
      this.service.firstFigure = num;
      this.service.secondFigure = 0;
      this.service.result = 0;
      this.service.operator = '';
      this.service.display = '';
      this.service.currentState = States.FirstFigure;
      this.updateDisplay(num);
    }
  }

  updateDisplay(update: any) {
    this.service.display = this.service.display + update;
    this.signal.emit(this.service.display);
  }

  handleSymbol(symbol) {
    if (this.service.currentState === States.FirstFigure) {
      if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
        this.service.operator = symbol;
        this.service.currentState = States.SecondFigure;
        this.updateDisplay(symbol);
      }
    } else if (this.service.currentState === States.SecondFigure) {
      if (symbol === '=') {
        this.service.result = this.resolve();
        this.service.currentState = States.Result;
        this.updateDisplay(symbol + this.service.result);
      }
    }
  }

  resolve(): number {
    switch (this.service.operator) {
      case '+':
        return this.service.firstFigure + this.service.secondFigure;
        case '-':
        return this.service.firstFigure - this.service.secondFigure;
        case '*':
        return this.service.firstFigure * this.service.secondFigure;
        case '/':
        return this.service.firstFigure / this.service.secondFigure;
    }
  }

  ngOnInit() {
  }

}
