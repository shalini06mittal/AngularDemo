import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Joke} from '../model/Joke';
import {jokelist,categories} from '../model/jokelist';
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit,OnChanges {

  jokes:Joke[]=[];
  @Input() joke:Joke;
  categories:string[];
  category='all';
  constructor() { 
    // this.jokes = [
    //   new Joke('Where did chickens go!!','To cross the roads'),
    //   new Joke('Joke 2','Punchline 2'),
    //   new Joke('Joke 3','Punchline 3'),
    // ];
  }

  ngOnInit() {
    this.jokes = jokelist;
    this.joke=new Joke('','','');
    this.categories=categories;
  }
ngOnChanges()
{
  console.log('joke list');
  console.log(this.joke);
  this.jokes.push(this.joke);
}
  
}
