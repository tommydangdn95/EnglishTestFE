import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesssynonymwordComponent } from './guesssynonymword.component';

describe('GuesssynonymwordComponent', () => {
  let component: GuesssynonymwordComponent;
  let fixture: ComponentFixture<GuesssynonymwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuesssynonymwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuesssynonymwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
