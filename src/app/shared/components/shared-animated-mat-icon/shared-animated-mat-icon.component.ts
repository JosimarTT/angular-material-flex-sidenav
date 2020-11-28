import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-animated-mat-icon',
  templateUrl: './shared-animated-mat-icon.component.html',
  styleUrls: ['./shared-animated-mat-icon.component.scss'],
})
export class SharedAnimatedMatIconComponent {
  @Input() start: string;
  @Input() end: string;
  @Input() colorStart: string;
  @Input() colorEnd: string;
  @Input() animate: boolean;
  @Input() animateFromParent?: boolean = false;
  @Input() class: string;

  toggle() {
    if (!this.animateFromParent) this.animate = !this.animate;
  }
}
