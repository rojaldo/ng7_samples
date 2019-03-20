import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  result: any;

  value: number = 3;
  highValue: number = 10;
  options: Options = {
    floor: 0,
    ceil: 55
  };

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo() {
    this.service.getRequest('https://api.punkapi.com/v2/beers').subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  getClass(beer: any) {
    if (beer.abv >= this.value && beer.abv <= this.highValue) {
      return 'col-xs-12 col-sm-12 col-md-6 col-lg-4 p-1';
    } else {
      return '';
    }
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
  }

  processError(error: any) {
  }

  processFinal() { }

}
