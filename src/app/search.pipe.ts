import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'customerEmailFilter',
    standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: string) => {
      let rVal =  val.toString().toLocaleLowerCase().includes(args);
      return rVal;
    })

  }

}