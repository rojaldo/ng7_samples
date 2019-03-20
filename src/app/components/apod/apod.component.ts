import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  result: any;
  safeSrc: SafeResourceUrl;
  resolved = false;
  myDate: any;

  constructor(public service: RequestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo(date?: any) {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    if (date) {
      url = url + '&date=' + date.year + '-' + date.month + '-' + date.day;
      console.log(url);
    }
    this.service.getRequest(url).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.result.url);
    this.resolved = true;
  }

  processError(error: any) {
  }

  processFinal() { }

}

