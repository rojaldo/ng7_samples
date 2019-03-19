import { Component, OnInit, Input } from '@angular/core';
import { ProcessorService } from 'src/app/services/processor.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() myDisplay: string;
  constructor(public service: ProcessorService) { }

  ngOnInit() {
  }

}
