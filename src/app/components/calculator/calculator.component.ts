import { Component, OnInit } from '@angular/core';
import { ProcessorService } from 'src/app/services/processor.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(public service: ProcessorService) { }

  ngOnInit() {
  }

  handleSignal(buttonsDisplay) {
    this.service.display = buttonsDisplay;
  }

}
