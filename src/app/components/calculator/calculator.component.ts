import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display = '';
  constructor() { }

  ngOnInit() {
  }

  handleFigure(num) {
    this.display = this.display + num;
  }

  handleSymbol(symbol) {
    this.display = this.display + symbol;
  }

}
