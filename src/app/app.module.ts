import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { JokeComponent } from './joke/joke.component';
import { HeaderComponent } from './header/header.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { DirectiveComponent } from './directive/directive.component';
import { HoverDirective } from './directive/hover.directive';
import { JokeDirective } from './joke/joke.directive'
//decorators
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    HeaderComponent,
    JokelistComponent,
    DirectiveComponent,
    HoverDirective,
    JokeDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
