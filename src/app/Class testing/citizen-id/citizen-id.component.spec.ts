import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenIdComponent } from './citizen-id.component';

describe('CitizenIdComponent', () => {
  let component: CitizenIdComponent;
  let fixture: ComponentFixture<CitizenIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Initial result should be null', () => {
    expect(component.result).toEqual(null);
  });

  it('(verify citizen id) should return true', () => {
    expect(component.verifyCitizenId("1209700564441")).toBeTruthy();
  });

  it('(verify citizen id) should return false', () => {
    expect(component.verifyCitizenId("1209700564442")).toBeFalse();
  });
});
