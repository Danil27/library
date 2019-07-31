import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatigBooksComponent } from './ratig-books.component';

describe('RatigBooksComponent', () => {
  let component: RatigBooksComponent;
  let fixture: ComponentFixture<RatigBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatigBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatigBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
