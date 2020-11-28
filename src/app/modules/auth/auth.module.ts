import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth.routing';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
