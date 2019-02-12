import { Component, OnInit, Input } from '@angular/core';
import {Joke} from '../model/Joke';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke:Joke;
  //joke:Joke[];
  constructor() { 
    this.joke=new Joke('','');
   
    console.log("joke component constructor");
  
  }

  ngOnInit() {
  }
  toggle(joke:Joke)
  {
    console.log(joke);
    this.joke.toggle();
  }
}
