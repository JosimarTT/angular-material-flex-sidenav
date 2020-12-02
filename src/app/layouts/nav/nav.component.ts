import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';

import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { fadingAnimation } from 'src/app/core/animations/fading.animation';

interface FoodNode {
  name: string;
  icon: string;
  path?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
    icon: 'fa-chart-bar',
    path: '/dashboard',
  },
  {
    name: 'Case',
    icon: 'fa-list-ul',
    children: [
      { name: 'Import', icon: 'fa-cloud-download-alt', path: '/case/import' },
      { name: 'List', icon: 'fa-list-ul', path: '/case/list' },
    ],
  },
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('fading', [
      transition('* => 1', [
        useAnimation(fadingAnimation, {
          params: {
            opacity: 0,
            time: '400ms',
          },
        }),
      ]),
    ]),
    trigger('slideVertical', [
      state(
        '*',
        style({
          height: 0,
        }),
      ),
      state(
        'show',
        style({
          height: '*',
        }),
      ),
      transition('* => *', [animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')]),
    ]),
  ],
})
export class NavComponent {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  @ViewChild('drawer') drawer: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  animate = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  toggleAnimate() {
    this.animate = !this.animate;
  }

  activeLi(event: any) {
    document.querySelectorAll('li').forEach((item) => {
      item.classList.remove('active', 'mat-elevation-z4');
    });
    event.target.classList.add('active', 'mat-elevation-z4');
  }

  activeButton(event: any) {
    document.querySelectorAll('button').forEach((item) => {
      item.classList.remove('active', 'mat-elevation-z4');
    });
    event.target.classList.add('active', 'mat-elevation-z4');
  }
  redirect(path: string) {
    this.router.navigateByUrl(path);
  }
}
