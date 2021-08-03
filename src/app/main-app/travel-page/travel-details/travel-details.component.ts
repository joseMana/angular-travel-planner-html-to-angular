import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Travel } from '../../../models/travel.model';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  @Input() displayedTravelDetail: Travel = null;
  isItineraryDisplayed = false;
  viewItineraryText: string = "VIEW ITINERARY";

  constructor() { }

  ngOnInit(): void {
  }

  statusClass(status: string) {
    switch(status) {
      case "Pending": {
        return "btn-warning";
      }
      case "Completed": {
        return "btn-success";
      }
      case "Ongoing": {
        return "btn-primary";
      }
      case "Cancelled": {
        return "btn-danger";
      }
      case "Draft": {
        return "btn-info";
      }
      default:
        return "";
    }
  }

  public clickViewItinerary() {
    this.isItineraryDisplayed = !this.isItineraryDisplayed;
    this.viewItineraryText = this.isItineraryDisplayed ? "HIDE ITINERARY" : "VIEW ITINERARY";
  }
}
