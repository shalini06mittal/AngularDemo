import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class DemoPipe implements PipeTransform {

  transform(value: any, args?: any,v1?:number): any {
    console.log("value "+value);
    console.log("args "+args);
    console.log("v1 "+v1);
    return Math.pow(value,args);
  }
}
