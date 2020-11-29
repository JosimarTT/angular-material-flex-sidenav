import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/data/services/dashboard.service';
import { setNavTitle } from 'src/app/helpers/general-helper';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Aibonito', weight: 10, symbol: 20 },
  { name: 'Caguas', weight: 30, symbol: 50 },
  { name: 'Camuy', weight: 74, symbol: 153 },
  { name: 'Central', weight: 123, symbol: 123 },
  { name: 'Culebra', weight: 25, symbol: 44 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'symbol2'];
  dataSource = ELEMENT_DATA;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    setNavTitle('Dashboard');
  }
}
