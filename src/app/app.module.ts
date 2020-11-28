import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // modules
    AuthModule,

    // core & shared
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
