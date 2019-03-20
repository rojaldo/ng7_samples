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

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };


  constructor(public service: RequestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo() {
// tslint:disable-next-line: max-line-length
    this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6').subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.result.url);
    this.id = this.result.url.split('embed/')[1];
    const ampersandPosition = this.id.indexOf('?');
    if (ampersandPosition !== -1) {
      this.id = this.id.substring(0, ampersandPosition);
    }
    console.log('ID:' + this.id);
    this.resolved = true;
  }

  processError(error: any) {
  }

  processFinal() { }

}

