import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';


@NgModule({
  declarations: [
    ErrorDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorDisplayComponent
  ]
})
export class SharedModule { }
