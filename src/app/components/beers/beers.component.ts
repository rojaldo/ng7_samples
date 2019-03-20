import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  result: any;

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

  processResult(data: any) {
    console.log(data);
    this.result = data;
  }

  processError(error: any) {
  }

  processFinal() { }

}
