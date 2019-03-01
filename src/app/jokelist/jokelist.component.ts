import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Joke} from '../model/Joke';
import {jokelist,categories} from '../model/jokelist';
import { JokeService } from '../service/joke.service';
@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  jokes:Joke[]=[];
  joke:Joke;
  categories:string[];
  category='all';
  editing:boolean = false;
  constructor(private service:JokeService) { 
    // this.jokes = [
    //   new Joke('Where did chickens go!!','To cross the roads'),
    //   new Joke('Joke 2','Punchline 2'),
    //   new Joke('Joke 3','Punchline 3'),
    // ];
  }

  ngOnInit() {
    this.jokes = this.service.getAllJokes();
    this.joke=new Joke('','','');
    this.categories=categories;
  }
// ngOnChanges()
// {
//   console.log('joke list');
//   console.log(this.joke);
//   this.jokes.push(this.joke);
// }

delete(joke)
{
  this.service.deleteJoke(joke);
}
edit(joke){
  this.joke = joke;
  this.editing=true;
  console.log(this.joke)
}
onsubmit()
{
  this.editing=false;
  this.service.editJoke(this.joke);
}
}
