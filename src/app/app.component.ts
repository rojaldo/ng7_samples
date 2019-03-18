import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hola';
  myNumber: number = 9;

  handleMyClick(event) {
    console.log('pasa por aquí');
    this.title = event.target.id;
  }
}
