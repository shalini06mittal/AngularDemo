import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from '../model/Joke';

@Pipe({
  name: 'jokepipe',
  // pure:false
})
export class JokePipe implements PipeTransform {

  transform(value: Joke[], category?: string): any {
   
    console.log('category '+category);
  
    return value.filter( (v) => v.category===category);
  }

}
