import { Pipe, PipeTransform } from '@angular/core';
/*
 *
*/
@Pipe({
  name: 'boolToStr'
})
export class BoolToStrPipe implements PipeTransform {
  transform(value: boolean, trueString: string = 'true', falseString: string = 'false'): string {
    return ( value ) ? trueString : falseString;
  }
}