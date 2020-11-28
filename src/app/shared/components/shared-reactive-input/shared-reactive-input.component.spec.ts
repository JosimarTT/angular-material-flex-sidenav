import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedReactiveInputComponent } from './shared-reactive-input.component';

describe('SharedReactiveInputComponent', () => {
  let component: SharedReactiveInputComponent;
  let fixture: ComponentFixture<SharedReactiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedReactiveInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedReactiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
