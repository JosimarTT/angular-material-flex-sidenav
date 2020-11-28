import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseCodeEnum } from 'src/app/data/enumerables';
import { UserRequestV1 } from 'src/app/data/schemas/request/user-request-v1';
import { UserService } from 'src/app/data/services/user.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';
import { timeSpanToSeconds } from 'src/app/helpers/time-span-helper';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  userRequest: UserRequestV1 = new UserRequestV1();
  employeeForm: FormGroup;
  newValidationSpan = '';

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {
    this.employeeForm = formBuilder.group({
      fcStartTime: ['', [Validators.required]],
      fcOfficeTime: ['', [Validators.required]],
      fcValidationSpan: ['', [Validators.required]],
      adminPassword: ['', [Validators.required]],
    });
  }

  public addChild(childName: string, childGroup: FormGroup) {
    this.employeeForm.addControl(childName, childGroup);
  }

  submit() {
    this.employeeForm.markAllAsTouched();
    this.userRequest.schedule.validationSpan = timeSpanToSeconds(
      this.newValidationSpan,
    );
    this.userRequest.adminPassword = this.employeeForm.get(
      'adminPassword',
    ).value;

    if (this.employeeForm.valid) {
      this.userService.insert(this.userRequest).subscribe((response) => {
        if (response.code === ResponseCodeEnum.CodigoExito) {
          SwalBasic(1, 'A new employee has been added', '');
          this.employeeForm.reset();
          this.employeeForm.markAsUntouched();
          this.employeeForm.markAsPristine();
        } else if (response.code === ResponseCodeEnum.CodigoDataExists) {
          SwalBasic(2, 'User Name or User Code already taken', '');
        } else {
          SwalBasic(
            2,
            'An unexpected error occurred',
            'Concact your administrator',
          );
        }
      });
    }
  }
}
