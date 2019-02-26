import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Joke} from '../model/Joke';
import {categories} from '../model/jokelist';
@Component({
  selector: 'app-jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeformComponent implements OnInit {
  joke:Joke;
  @Output() jokeChange:EventEmitter<Joke> = new EventEmitter();
  categories:string[];
  hasError:boolean=true;
  submitted = false;
  constructor() { 
  this.categories = categories;
  this.joke = new Joke('','','');
  }
   submit(jf)
   {   
     console.log(jf);
     this.jokeChange.emit(this.joke); 
   }
  ngOnInit() {
  }

}
