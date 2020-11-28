import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedReactiveSelectComponent } from './shared-reactive-select.component';

describe('SharedReactiveSelectComponent', () => {
  let component: SharedReactiveSelectComponent;
  let fixture: ComponentFixture<SharedReactiveSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedReactiveSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedReactiveSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
