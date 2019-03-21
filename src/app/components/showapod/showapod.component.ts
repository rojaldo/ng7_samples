import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { RequestService } from 'src/app/services/request.service';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-showapod',
  templateUrl: './showapod.component.html',
  styleUrls: ['./showapod.component.css']
})
export class ShowapodComponent implements OnInit, OnChanges {

  @Input() date: any;
  result: any;
  safeSrc: SafeResourceUrl;
  resolved = false;
  errorKey = false;

  constructor(public service: RequestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.getApiInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getApiInfo(this.date);
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
    this.errorKey = true;
  }

  processFinal() { }

}

