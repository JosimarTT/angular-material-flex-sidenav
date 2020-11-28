import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-shared-spinner',
  templateUrl: './shared-spinner.component.html',
  styleUrls: ['./shared-spinner.component.scss'],
})
export class SharedSpinnerComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: SpinnerService) {}
}
