import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @ViewChild(CourseCardComponent) course1Ref: CourseCardComponent;
  @ViewChild('listTitle') listTitleRef: ElementRef;

  public course1: Course;
  public course2: Course;
  public course3: Course;

  public isViewChildButtonClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setInitialCourses();
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

  private setInitialCourses(): void {
    this.course1 = {
      title: 'Angular 10',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      price: 700,
      duration: 24,
      imageUrl: 'https://picsum.photos/100/100',
      isActive: true,
      promoCode: ''
    };

    this.course2 = {
      title: 'ReactJs',
      description: 'A JavaScript library for building user interfaces, maintained by Facebook',
      price: 500,
      duration: 24,
      imageUrl: 'https://picsum.photos/100/100',
      isActive: true,
      promoCode: ''
    };

    this.course3 = {
      title: 'VueJs',
      description: 'The Progressive JavaScript Framework.',
      price: 450,
      duration: 24,
      imageUrl: 'https://picsum.photos/100/100',
      isActive: true,
      promoCode: ''
    };
  }
}
