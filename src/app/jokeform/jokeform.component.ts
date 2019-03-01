import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Joke} from '../model/Joke';
import {categories} from '../model/jokelist';
import { JokeService } from '../service/joke.service';

@Component({
  selector: 'app-jokeform',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeformComponent implements OnInit {
  joke:Joke;
  //@Output() jokeChange:EventEmitter<Joke> = new EventEmitter();
  categories:string[];
  hasError:boolean=true;
  submitted = false;
 
  constructor(private service:JokeService) { 
  this.categories = categories;
  this.joke = new Joke('','','');
  
  }
   submit(jf)
   {   
     console.log(jf);
     this.joke = jf;
     console.log("form submit");
     console.log(this.joke);
     //this.service.addJoke(jf);//{setup,line,category,id}
     this.service.addJoke(new Joke(jf.setup,jf.line,
      jf.category));
   }
  ngOnInit() {
    
  }

}
