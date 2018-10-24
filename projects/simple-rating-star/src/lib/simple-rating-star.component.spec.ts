import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRatingStarComponent } from './simple-rating-star.component';

describe('SimpleRatingStarComponent', () => {
  let component: SimpleRatingStarComponent;
  let fixture: ComponentFixture<SimpleRatingStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRatingStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRatingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
