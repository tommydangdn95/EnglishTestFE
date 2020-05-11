import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessmainwordComponent } from './guessmainword.component';

describe('GuessmainwordComponent', () => {
  let component: GuessmainwordComponent;
  let fixture: ComponentFixture<GuessmainwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessmainwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessmainwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
