import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emppipe',
  pure:false
})
export class EmpPipe implements PipeTransform {
  transform(value: any[], city?: any): any {
    console.log('pipe invoked '+city);
    return value.filter( (v) => v.city===city);
  }
}
