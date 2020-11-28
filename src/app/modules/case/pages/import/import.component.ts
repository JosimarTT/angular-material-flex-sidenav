import { Component, OnInit } from '@angular/core';
import { setNavTitle } from 'src/app/helpers/general-helper';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setNavTitle('Case Import');
  }
}
