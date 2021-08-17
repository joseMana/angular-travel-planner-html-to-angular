import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, ValidatorFn } from '@angular/forms';
import { Travel } from '../../../models/travel.model';
import { DateValidator } from '../../../validators/validator.date';

@Component({
  selector: 'app-travel-goal',
  templateUrl: './travel-goal.component.html',
  styleUrls: ['./travel-goal.component.css']
})
export class TravelGoalComponent implements OnInit {
  @Output() onSubmitClicked = new EventEmitter<Travel>();

  travels: Travel[] = [];

  items: FormArray;

  public myForm!: FormGroup;
  private maxNameLength: number = 50;
  private minNameLength: number = 5;
  private maxShortDescLength: number = 255;
  private minShortDescLength: number = 5;


  get name(): FormControl | null {
    return this.myForm.get('name') as FormControl;
  }

  get place(): FormControl | null {
    return this.myForm.get('place') as FormControl;
  }

  get imgPath(): FormControl | null {
    return this.myForm.get('imgPath') as FormControl;
  }

  get shortDescription(): FormControl | null {
    return this.myForm.get('shortDescription') as FormControl;
  }

  get dateOfDeparture(): FormControl | null {
    return this.myForm.get('dateOfDeparture') as FormControl;
  }

  get timeOfDeparture(): FormControl | null {
    return this.myForm.get('timeOfDeparture') as FormControl;
  }

  get dateOfReturn(): FormControl | null {
    return this.myForm.get('dateOfReturn') as FormControl;
  }

  get timeOfReturn(): FormControl | null {
    return this.myForm.get('timeOfReturn') as FormControl;
  }

  get requiredTravelersCount(): FormControl | null {
    return this.myForm.get('requiredTravelersCount') as FormControl;
  }
  
  get itineraries(): FormArray | null {
    return this.myForm.get('itineraries') as FormArray;
  } 

  get activitydate(): FormControl | null {
    return this.myForm.get('activitydate') as FormControl;
  }

  get activities(): FormArray | null {
    return this.myForm.get('activities') as FormArray;
  } 

  get time(): FormControl | null {
    return this.myForm.get('time') as FormControl;
  }

  get title(): FormControl | null {
    return this.myForm.get('title') as FormControl;
  }

  get description(): FormControl | null {
    return this.myForm.get('description') as FormControl;
  }

  addItinerary(): void {
    this.itineraries?.push(this.createTravelGoalItinerary());
  }

  removeItinerary(index: number): void {
    this.itineraries?.removeAt(index);
  }

  addActivity(): void {
    this.activities?.push(this.createTravelGoalActivity());
  }

  removeActivity(index: number): void {
    this.activities?.removeAt(index);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.createTravelGoalForm();
  }

  createTravelGoalForm(): FormGroup {
    return this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(this.minNameLength) , Validators.maxLength(this.maxNameLength)]],
      'place': ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      'imgPath': ['https://picsum.photos/650/450', [Validators.required]],
      'shortDescription': ['', [Validators.required, Validators.minLength(this.minShortDescLength), Validators.maxLength(this.maxShortDescLength)]],
      'dateOfDeparture': ['', DateValidator.departureDateValidator],
      'timeOfDeparture': ['', Validators.required],
      'dateOfReturn': ['', this.dateRangeValidator],
      'timeOfReturn': ['', Validators.required],
      'organizer' : ['Seph Manangan'],
      'status':['Pending'],
      'requiredTravelersCount': [0],
      'joinedTravelersCount':[0],
      'isActive':[false],
      'itineraries': this.fb.array([]),
    })
  };

  createTravelGoalItinerary(): FormGroup {
    return this.fb.group(
      {
      'activitydate': ['', [Validators.required]],
      'activities': this.fb.array([]),
      }
  )};

  createTravelGoalActivity(): FormGroup {
    return this.fb.group(
      {
      'time': ['', [Validators.required]],
      'title': [''],
      'description':['']
      }
  )};

  onSubmit(form: FormGroupDirective): void {    
    //console.warn(this.myForm.value);
    //if (form.valid) {
      const travel : Travel = this.myForm.value as Travel;
      //console.log(travel);
      //this.travels.push(form.value);
      //console.log(this.createdTravel);
      this.onSubmitClicked.emit(travel);
      console.log(travel);
      console.log("onSubmit");
      form.resetForm();
    //}
  }

  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {

    let invalid = false;
    const from = this.myForm! && this.myForm!.get("dateOfDeparture").value;
    const to = this.myForm! && this.myForm!.get("dateOfReturn").value;
    if (from && to) {
      invalid = new Date(from).valueOf() >= new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
    
  };
}
