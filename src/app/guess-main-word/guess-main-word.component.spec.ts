import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessMainWordComponent } from './guess-main-word.component';

describe('GuessMainWordComponent', () => {
  let component: GuessMainWordComponent;
  let fixture: ComponentFixture<GuessMainWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessMainWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessMainWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
