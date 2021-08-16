import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGoalComponent } from './travel-goal.component';

describe('TravelGoalComponent', () => {
  let component: TravelGoalComponent;
  let fixture: ComponentFixture<TravelGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
