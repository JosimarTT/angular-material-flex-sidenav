import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MaterialModule } from './modules/material.module';
import { SharedReactiveInputComponent } from './components/shared-reactive-input/shared-reactive-input.component';
import { SharedReactiveSelectComponent } from './components/shared-reactive-select/shared-reactive-select.component';
import { SharedSpinnerComponent } from './components/shared-spinner/shared-spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SharedAnimatedMatIconComponent } from './components/shared-animated-mat-icon/shared-animated-mat-icon.component';

@NgModule({
  declarations: [
    SharedReactiveInputComponent,
    SharedReactiveSelectComponent,
    SharedSpinnerComponent,
    SharedAnimatedMatIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,

    SharedReactiveInputComponent,
    SharedReactiveSelectComponent,
    SharedSpinnerComponent,
    SharedAnimatedMatIconComponent,
  ],
  providers: [SpinnerService],
})
export class SharedModule {}
