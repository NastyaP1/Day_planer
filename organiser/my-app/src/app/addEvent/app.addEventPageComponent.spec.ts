import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventPageComponent } from './app.addEventPageComponent';

describe('AddEventPageComponent', () => {
  let component: AddEventPageComponent;
  let fixture: ComponentFixture<AddEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
