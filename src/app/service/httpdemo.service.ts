import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Joke } from '../model/Joke';
@Injectable({
  providedIn: 'root'
})
export class HttpdemoService {
  url:string = 'http://localhost:8081/Jokes';
  constructor(private httpService:HttpClient) { }
  doGet()
  {
    //observables
    return this.httpService.get(this.url);
  }
  doPost(joke:Joke)
  {
    this.httpService.post(this.url,joke,{responseType:'text'}).subscribe(
      (resp)=>console.log("added "+resp)
    );
  }
  doDelete(id:number)
  {
      this.httpService.delete(this.url+'/'+id,{responseType:'text'}).subscribe(
        (resp)=>console.log("added "+resp)
      );
  }
  doEdit(joke:Joke)
  {
    this.httpService.put(this.url,joke,{responseType:'text'}).subscribe(
      (resp)=>console.log("added "+resp)
    );
  }
}
