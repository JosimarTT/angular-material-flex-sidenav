import { Component, OnInit } from '@angular/core';
import { setNavTitle } from 'src/app/helpers/general-helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setNavTitle('Case List');
  }
}
