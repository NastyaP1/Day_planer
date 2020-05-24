import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddListPageComponent } from './app.addlistPageComponent';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddListPageComponent', () => {
  let component: AddListPageComponent;
  let fixture: ComponentFixture<AddListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListPageComponent ],
      imports: [ FormsModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
