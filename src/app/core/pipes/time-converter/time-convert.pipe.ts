import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeConvert'
})
export class TimeConvertPipe implements PipeTransform {

    transform(value: number) {
        var num = value;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h "+rminutes+"m";
    }
}