import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDetailsDeclarationImpotsComponent } from './voir-details-declaration-impots.component';

describe('VoirDetailsDeclarationImpotsComponent', () => {
  let component: VoirDetailsDeclarationImpotsComponent;
  let fixture: ComponentFixture<VoirDetailsDeclarationImpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirDetailsDeclarationImpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirDetailsDeclarationImpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
