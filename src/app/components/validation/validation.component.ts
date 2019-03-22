import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { RequestService } from 'src/app/services/request.service';


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public model: any;
  user: User;
  countries: string[] = [];
  resolved = false;

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.user = new User('', '', '');
    this.getApiInfo();
  }

  getApiInfo() {
    const url = 'https://restcountries.eu/rest/v2/all';
    this.service.getRequest(url).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    for (const country of data) {
      this.countries.push(country.name);
    }
    this.resolved = true;
  }

  processError(error: any) {
  }

  processFinal() { }


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }
}