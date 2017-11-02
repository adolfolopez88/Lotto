import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './shared/user.service';
import { FacebookLoginService } from './shared/facebook-login.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { FacebookModule } from 'ngx-facebook';

const routes: Routes =  [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    FacebookModule.forRoot(),
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    FacebookLoginService,
    UserService
  ],
})
export class UserModule {


}
