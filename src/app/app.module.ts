import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { JokeComponent } from './joke/joke.component';
import { HeaderComponent } from './header/header.component'
//decorators
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
