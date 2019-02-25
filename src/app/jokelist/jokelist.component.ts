import { Component, OnInit } from '@angular/core';
import {Joke} from '../model/Joke';
import {jokelist,categories} from '../model/jokelist';
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  jokes:Joke[];
  categories:string[];
  category='humor';
  constructor() { 
    this.jokes = jokelist;
    this.categories=categories;
    // this.jokes = [
    //   new Joke('Where did chickens go!!','To cross the roads'),
    //   new Joke('Joke 2','Punchline 2'),
    //   new Joke('Joke 3','Punchline 3'),
    // ];
  }

  ngOnInit() {
  }

}
