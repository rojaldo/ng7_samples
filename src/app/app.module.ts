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
import { AlcoholPipe } from './pipes/alcohol.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { ApodComponent } from './components/apod/apod.component';
import { ShowapodComponent } from './components/showapod/showapod.component';
import { ValidationComponent } from './components/validation/validation.component';
import {UIRouterModule} from '@uirouter/angular';

const calculatorState = { name: 'calculator', url: '/calculator',  component: CalculatorComponent };
const heroesState = { name: 'heroes', url: '/heroes',  component: HeroesComponent };
const beersState = { name: 'beers', url: '/beers',  component: BeersComponent };
const apodState = { name: 'apod', url: '/apod',  component: ApodComponent };
const formState = { name: 'form', url: '/form',  component: ValidationComponent };
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    ButtonsComponent,
    HeroesComponent,
    ListComponent,
    FormComponent,
    BeersComponent,
    AlcoholPipe,
    ApodComponent,
    ShowapodComponent,
    ValidationComponent  ],
  imports: [
    BrowserModule, UIRouterModule.forRoot({ states: [ calculatorState, heroesState, beersState, apodState, formState ], useHash: true }),
    NgbModule, FormsModule, HttpClientModule, Ng5SliderModule
  ],
  providers: [ProcessorService, HeroesService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
