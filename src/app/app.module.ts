import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProcessorService } from './services/processor.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesService } from './services/heroes.service';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { BeersComponent } from './components/beers/beers.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    ButtonsComponent,
    HeroesComponent,
    ListComponent,
    FormComponent,
    BeersComponent  ],
  imports: [
    BrowserModule,
    NgbModule, FormsModule, HttpClientModule
  ],
  providers: [ProcessorService, HeroesService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
