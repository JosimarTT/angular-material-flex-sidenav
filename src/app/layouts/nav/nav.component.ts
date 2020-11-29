import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FlatTreeControl } from '@angular/cdk/tree';

import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Router } from '@angular/router';

interface FoodNode {
  name: string;
  path: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Case',
    path: '',
    children: [
      {
        name: 'Import',
        path: '/case/import',
      },
      {
        name: 'List',
        path: '/case/list',
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  path: string;
  level: number;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @ViewChild('drawer') drawer: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  animate = false;
  activeNode: ExampleFlatNode;
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
      path: node.path,
    };
  };

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

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
