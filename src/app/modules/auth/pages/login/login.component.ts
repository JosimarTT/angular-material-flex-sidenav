import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';
import { SwalBasic } from 'src/app/helpers/swal-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string;
  isLoading: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.buildForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.router.navigateByUrl('/dashboard');
    // const request = this.loginForm.value;
    // this.authService.login(request).subscribe((response) => {
    //   if (response?.code === 0) {
    //     this.authService.authResponse = response.objeto;
    //     this.router.navigateByUrl('/dashboard');
    //   } else {
    //     SwalBasic(2, 'User or password incorrect', '');
    //   }
    // });
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
