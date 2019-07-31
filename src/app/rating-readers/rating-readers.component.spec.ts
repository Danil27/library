import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingReadersComponent } from './rating-readers.component';

describe('RatingReadersComponent', () => {
  let component: RatingReadersComponent;
  let fixture: ComponentFixture<RatingReadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingReadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
