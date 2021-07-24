import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { BannerComponent } from './banner/banner.component';
import { Course } from '../models/course.model';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(CourseCardComponent) course1Ref: CourseCardComponent;
  @ViewChild('listTitle') listTitleRef: ElementRef;

  public banner: BannerComponent;
  public course2: Course;
  public course3: Course;

  public isViewChildButtonClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setInitialBanner();
  }

  public logViewChildren(): void {
    console.log(this.course1Ref);
    console.log(this.listTitleRef);

    const message1: string = `The first course card that matches CourseListComponent selector has a title of ${this.course1Ref.course.title}`;
    const message2: string = `The header text of list is "${this.listTitleRef.nativeElement.innerText}"`;

    console.log(message1);
    console.log(message2);
  }
  
  public startCourse(course: Course): void {
    // defensive coding
    if(!course) {
      return;
    }

    course.hasStarted = !course.hasStarted;
  }

  private setInitialBanner(): void {

  }
}
