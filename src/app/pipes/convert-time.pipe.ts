import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: any): any {
         let hour = (value.split(':'))[0]
         let min = (value.split(':'))[1]
         let part = hour > 12 ? 'pm' : 'am';
         min = (min+'').length == 1 ? `0${min}` : min;
         hour = hour > 12 ? hour - 12 : hour;
         hour = (hour+'').length == 1 ? `0${hour}` : hour;
         return `${hour}:${min} ${part}`
  }

}
