import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  value:string;
  constructor() {
    this.value = 'test service';
   }
}
