import { Component, OnInit } from '@angular/core';
import {Joke} from '../model/Joke';
import {categories} from '../model/jokelist';
@Component({
  selector: 'app-jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeformComponent implements OnInit {

  joke:Joke;
  categories:string[];
  hasError:boolean=true;
  submitted = false;
  constructor() { 
  this.categories = categories;
  this.joke = new Joke('','to pass','humour');
  }
  

  ngOnInit() {
  }

}
