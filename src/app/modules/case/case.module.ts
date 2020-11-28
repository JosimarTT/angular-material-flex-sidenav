import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportComponent } from './pages/import/import.component';
import { ListComponent } from './pages/list/list.component';
import { CaseRoutingModule } from './case.routing';

@NgModule({
  declarations: [ImportComponent, ListComponent],
  imports: [CommonModule, SharedModule, CaseRoutingModule],
})
export class CaseModule {}
