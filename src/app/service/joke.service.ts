import { Injectable } from '@angular/core';
import { Joke } from '../model/Joke';
import { jokelist } from '../model/jokelist';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokes:Joke[]
  constructor() {
    this.jokes = jokelist;
   }
   getAllJokes():Joke[]
   {
     return this.jokes;
   }
   addJoke(joke:Joke)
   {
      joke.id=this.jokes.length+1;
      console.log("add joke");
      console.log(joke);
     this.jokes.unshift(joke);
   }
   deleteJoke(joke:Joke)
   {
     for(var i=0;i<this.jokes.length;i++)
     {
       if(joke.id === this.jokes[i].id)
       {
         this.jokes.splice(i,1);
         break;
       }
     }
   }
   editJoke(joke)
  {
    for(var j=0;j<this.jokes.length;j++)
      {
        if(this.jokes[j].id===joke.id)
        {
          this.jokes[j].setup=joke.setup;
          this.jokes[j].line=joke.line;
          this.jokes[j].category=joke.category;
          break;
        }
      }
    }
}

