import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHair',
  pure: false
})

export class StatusPipe implements PipeTransform {
  transform(value: any, hairStatus:boolean): any {
    if(value.length === 0) {
      return value;
    }
    else {
      return value.filter( (item:any) => item.grayhair === hairStatus )
    }
    // old method
    // let filteredArr:any = [];
    // for(let item of value) {
    //   if(item.status === hairStatus) {
    //     filteredArr.push(item);
    //   }
    // }
    // return filteredArr;
  }
}
