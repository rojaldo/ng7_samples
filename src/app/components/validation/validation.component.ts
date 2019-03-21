import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  user: User;
  constructor() { }
  ngOnInit() {
    this.user = new User('', '', '');
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }
}