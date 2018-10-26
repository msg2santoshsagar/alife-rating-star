import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlifeRatingStarComponent } from './alife-rating-star.component';

describe('AlifeRatingStarComponent', () => {
  let component: AlifeRatingStarComponent;
  let fixture: ComponentFixture<AlifeRatingStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlifeRatingStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlifeRatingStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
