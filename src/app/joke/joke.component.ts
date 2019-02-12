import { Component, OnInit } from '@angular/core';
import {Joke} from '../model/Joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  //joke:Joke;
  joke:Joke[];
  constructor() { 
    //this.joke=[];
    this.joke = [
      new Joke('Where did chickens go!!','To cross the roads'),
      new Joke('Joke 2','Punchline 2'),
      new Joke('Joke 3','Punchline 3'),
    ];
  }

  ngOnInit() {
  }
  toggle(joke:Joke)
  {
    console.log(joke);
    joke.toggle();
  }
}
