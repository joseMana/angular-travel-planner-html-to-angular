import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {
  static departureDateValidator(AC: AbstractControl) {
    let invalid = new Date(Date.now()).valueOf() > new Date(AC.value).valueOf();

    if (invalid) {
      return { 'dateValidator': true };
    }
    else {
      return { 'dateValidator': false };
    }
  }
}
