import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'myDateTimeFormat'
})
export class myDateTimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).format('DD/MM/YYYY à HH:mm');
  }
}