import { Component, Input, OnInit } from '@angular/core';
import { Itinerary } from '../../../../models/itinerary.model';

@Component({
  selector: 'app-travel-itinerary',
  templateUrl: './travel-itinerary.component.html',
  styleUrls: ['./travel-itinerary.component.css']
})
export class TravelItineraryComponent implements OnInit {
  @Input() isDisplayed: boolean = false;
  @Input() itineraryList: Itinerary[] = null;
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  collapseClass(index: number) {
    if (index === 0) {
      return "displayed";
    }

    return "collapsed";
  }

  toggleCollapse(event):void { 
    let details = event.target.parentNode.parentNode.nextSibling;

    if (!details) {
      details = event.target.parentNode.parentNode.parentNode.parentNode.nextSibling;
    }

    if (details && details.classList && details.classList.contains("activity-details")) {      
        if (details.classList.contains("collapse")) {
          details.classList.remove("collapse");
          details.classList.add("displayed");
        }
        else if (details.classList.contains("displayed")) {
          details.classList.remove("displayed");
          details.classList.add("collapse");
        }
        else {
          details.classList.add("collapse");
        }
    }    
  }
}
