import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAnimatedMatIconComponent } from './shared-animated-mat-icon.component';

describe('SharedAnimatedMatIconComponent', () => {
  let component: SharedAnimatedMatIconComponent;
  let fixture: ComponentFixture<SharedAnimatedMatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedAnimatedMatIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAnimatedMatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
