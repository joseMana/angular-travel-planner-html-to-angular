import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelList } from '../../models/travels';
import { Travel } from '../../models/travel.model';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  @Input() isSelected : boolean = false;
  travelList = TravelList;
  @Input() selectedTravelDetail: Travel = null;

  constructor() { }

  ngOnInit(): void {
    if (this.isSelected) {
      this.selectedTravelDetail = null;
    }    
  }
  
  trackByTravelId(index: number, travel: Travel) {
    return travel.id;
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

  clickTravelDetail(clickedTravelDetail: Travel) {
    this.selectedTravelDetail = clickedTravelDetail;
  }

  getNewTravelGoal(newTravel: Travel) {
    console.log("getNewTravelGoal");
    console.log(newTravel);
    this.travelList?.push(newTravel);
  }
}
