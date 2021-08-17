import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {
  static departureDateValidator(AC: AbstractControl) {
    /* allow same day departure */
    var date = new Date();

    var day = date.getDate();
    var month = (date.getMonth() + 1).toString();
    if (Number(month) <= 10) {
      month = "0" + month;
    }
    var year = date.getFullYear();
    var dateString = year + "-" + month + "-" + day;
    if (dateString == AC.value) {
      return { 'dateValidator': false };
    }
    /* allow same day departure */


    let invalid = new Date(Date.now()).valueOf() > new Date(AC.value).valueOf();

    if (invalid) {
      return { 'dateValidator': true };
    }
    else {
      return { 'dateValidator': false };
    }
  }
}
