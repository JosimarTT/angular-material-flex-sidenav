import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

export const verticalSlideAnimation = animation([
  style({
    opacity: '{{ opacity }}',
  }),
  animate('{{ time }}'),
]);
