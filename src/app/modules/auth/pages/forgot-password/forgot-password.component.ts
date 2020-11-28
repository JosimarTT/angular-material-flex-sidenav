import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/data/services/user.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  requestForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  resetPassword() {
    const request = this.requestForm.value;
    this.userService.resetPassword(request).subscribe(() => {
      SwalBasic(
        1,
        'Your password has been reset',
        'A temporal password has been sent to your email',
      );
    });
  }

  private buildForm(): void {
    this.requestForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
