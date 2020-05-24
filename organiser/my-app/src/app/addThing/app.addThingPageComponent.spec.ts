import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingPageComponent } from './app.addThingPageComponent';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddThingPageComponent', () => {
  let component: AddThingPageComponent;
  let fixture: ComponentFixture<AddThingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingPageComponent ],
      imports: [ FormsModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
