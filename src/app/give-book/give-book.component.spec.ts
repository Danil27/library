import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveBookComponent } from './give-book.component';

describe('GiveBookComponent', () => {
  let component: GiveBookComponent;
  let fixture: ComponentFixture<GiveBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
