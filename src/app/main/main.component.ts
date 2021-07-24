import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public banner: BannerComponent;

  constructor() { }

}
