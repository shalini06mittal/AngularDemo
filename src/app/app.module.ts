import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { JokeComponent } from './joke/joke.component';
import { HeaderComponent } from './header/header.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { DirectiveComponent } from './directive/directive.component';
import { HoverDirective } from './directive/hover.directive';
import { JokeDirective } from './joke/joke.directive';
import { DemoPipe } from './pipes/demo.pipe'
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { EmpPipe } from './pipes/emp.pipe';
import { JokeformComponent } from './jokeform/jokeform.component';
import { JokePipe } from './jokelist/joke.pipe'; 
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { ServiceComponent } from './service/service.component';
import { ChildComponent } from './service/child.component';

registerLocaleData(localeFr, 'fr');

//decorators
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    HeaderComponent,
    JokelistComponent,
    DirectiveComponent,
    HoverDirective,
    JokeDirective,
    DemoPipe,
    EmpPipe,
    JokeformComponent,
    JokePipe,
    ReactiveComponent,
    ServiceComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
