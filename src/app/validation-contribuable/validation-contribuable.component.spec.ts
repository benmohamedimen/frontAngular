import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationContribuableComponent } from './validation-contribuable.component';

describe('ValidationContribuableComponent', () => {
  let component: ValidationContribuableComponent;
  let fixture: ComponentFixture<ValidationContribuableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationContribuableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationContribuableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
