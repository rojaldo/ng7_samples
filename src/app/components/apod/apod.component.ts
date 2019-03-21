import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  myDate: any;

  constructor() { }

  ngOnInit() {
  }

}

