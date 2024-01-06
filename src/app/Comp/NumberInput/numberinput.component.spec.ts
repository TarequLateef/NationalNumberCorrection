import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberinputComponent } from './numberinput.component';

describe('NumberinputComponent', () => {
  let component: NumberinputComponent;
  let fixture: ComponentFixture<NumberinputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberinputComponent]
    });
    fixture = TestBed.createComponent(NumberinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
